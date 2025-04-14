import { Toaster } from "components/pure-element/toaster";
import { useEffect, useState } from "react";
import { ReduxStoreModel } from "model/redux/redux-store-model";
import Map, { Layer, LayerProps, Source } from "react-map-gl";
import { useSelector } from "react-redux";
import { AdvancedSearchService } from "service/advanced-search.service";
import ToastComponent from "components/toast-view/toastGradient";
import Pins from "./pins";
import { FilterItemConfig } from "model/etc/filter-items-config.model";
import { handleLog } from "tools/pure-function/log";

const TOKEN = `pk.eyJ1IjoibWF0aW5ub3JvenBvdXIiLCJhIjoiY2xhZjZyMzY1MTIxdDN2czQycjNsdXdxbyJ9.SAwQhE_inq9Syo1F3boUCA`;

const advancedSearchService = new AdvancedSearchService(
  process.env.REACT_APP_BASE_ADVANCED_SEARCH_URL as string
);
interface StateMapProps {
  filter: any;
  desiredArea: Array<string>;
  selectedFilterItems: Array<FilterItemConfig>;
  setMapData: any;
}
const StateMap = ({
  desiredArea,
  filter,
  selectedFilterItems,
  setMapData,
}: StateMapProps) => {
  const searchRefactorJsonAdvanced = useSelector(
    (store: ReduxStoreModel) => store.searchRefactorJsonAdvanced
  );
  const [locationsData, setlocationsData] = useState<any>([]);
  const [ChangeZoom, setChangeZoom] = useState<any>();

  const getPlatformsDataList2 = async () => {
    try {
      const res = await advancedSearchService.getGeoLocation({
        main_filter: searchRefactorJsonAdvanced,
        aux_filter: {
          geo: {
            limit: 100,
            category: selectedFilterItems.map((item) => item.category),
            province: desiredArea,
          },
        },
      });
      setlocationsData(res.data.map_data);
      setMapData(res.data.data);
      let NewValue = "";
      searchRefactorJsonAdvanced.words.data.map(
        (item) => (NewValue += `(${item.status}->${item.type}:${item.value})`)
      );
      handleLog({
        FormName: "منطقه مورد نظر",
        WorkStatus: "AdvanceSearch",
        NewValue,
      });
    } catch (err: any) {
      Toaster.error(
        <ToastComponent
          title={err.response.data.Error.message}
          description={""}
        />,
        { toastId: "Platform-Data-Count" }
      );
    }
  };
  useEffect(() => {
    getPlatformsDataList2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desiredArea, selectedFilterItems, searchRefactorJsonAdvanced]);

  return (
    <Map
      initialViewState={{
        latitude: 35.755428556765054,
        longitude: 51.723633655982574,
        zoom: 5,
        bearing: 0,
        pitch: 0,
      }}
      onZoom={(e) => {
        setChangeZoom(e);
      }}
      mapStyle="mapbox://styles/matinnorozpour/cla7tphmp000l14melgwvbob8"
      mapboxAccessToken={TOKEN}
    >
      <Source
        id="earthquakes"
        type="geojson"
        data={dataJson}
        cluster={true}
        clusterMaxZoom={14}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
      <Pins
        selectedFilterItems={selectedFilterItems}
        data={locationsData}
        ChangeZoom={ChangeZoom}
        filter={filter}
      />
    </Map>
  );
};

const dataJson: any = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84",
    },
  },
  features: [
    {
      geometry: {
        type: "Point",
        coordinates: [-151.5129, 63.1016],
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-151.4771, 63.0742],
      },
    },
    {
      geometry: {
        type: "Point",
        coordinates: [-155.1268, 57.8123],
      },
    },
  ],
};
const clusterLayer: LayerProps = {
  id: "clusters",
  type: "circle",
  source: "earthquakes",
  filter: ["has", "point_count"],
  paint: {
    "circle-color": [
      "step",
      ["get", "point_count"],
      "#51bbd6",
      100,
      "#f1f075",
      750,
      "#f28cb1",
    ],
    "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
  },
};
const unclusteredPointLayer: LayerProps = {
  id: "unclustered-point",
  type: "circle",
  source: "earthquakes",
  filter: ["!", ["has", "point_count"]],
  paint: {
    "circle-color": "#11b4da",
    "circle-radius": 4,
    "circle-stroke-width": 1,
    "circle-stroke-color": "#fff",
  },
};
export default StateMap;
