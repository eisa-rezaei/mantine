import DisplayFilters from './display-filters/DisplayFilters';
import RegionSelectionMode from './region-selection-mode/RegionSelectionMode';

interface MapProviderProps {
  children: JSX.Element;
  radius?: number;
  filter: string;
  desiredArea?: Array<string>;
  type: string;
  setFilter: (filter: string) => void;
  handleChangeFilter: (value: string) => void;
  setRadius?: (radius: number) => void;
  setDesiredArea?: (item: string) => void;
  handleConfirmRadius?: () => void;
}
const MapProvider = ({
  children,
  filter,
  desiredArea,
  setFilter,
  handleChangeFilter,
  radius,
  setRadius,
  setDesiredArea,
  handleConfirmRadius,
  type,
}: MapProviderProps) => {
  return (
    <div className="map-provider-wrapper">
      <RegionSelectionMode
        type={type}
        radius={radius}
        changeRadius={setRadius}
        confirmRadius={handleConfirmRadius}
        desiredArea={desiredArea}
        setDesiredArea={setDesiredArea}
      />
      <DisplayFilters filter={filter} setFilter={handleChangeFilter} />
      <div className="map-wrapper" dir="ltr">
        {children}
      </div>
    </div>
  );
};

export default MapProvider;
