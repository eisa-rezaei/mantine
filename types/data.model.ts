export interface Root {
  products: Product[];
  categories: Category[];
}

export interface Product {
  id: number;
  title_fa: string;
  title_en: string;
  url: Url;
  status: string;
  has_quick_view: boolean;
  data_layer: DataLayer;
  product_type: string;
  test_title_fa: string;
  test_title_en: string;
  digiplus: Digiplus;
  images: Images;
  rating: Rating;
  default_variant: DefaultVariant;
  properties: Properties3;
  colors?: Color2[];
}

export interface Url {
  uri: string;
}

export interface DataLayer {
  brand: string;
  category: string;
  metric6: number;
  dimension2: number;
  dimension6: number;
  dimension7: string;
  dimension9: number;
  dimension11: number;
  dimension20: string;
  item_category2: string;
  item_category3: string;
  item_category4: string;
  item_category5: string;
}

export interface Digiplus {
  services: string[];
  services_summary: string[];
  service_list: ServiceList[];
  is_jet_eligible: boolean;
  cash_back: number;
  is_general_location_jet_eligible: boolean;
  fast_shipping_text?: string;
}

export interface ServiceList {
  title: string;
}

export interface Images {
  main: Main;
}

export interface Main {
  url: string[];
  webp_url: string[];
}

export interface Rating {
  rate: number;
  count: number;
}

export interface DefaultVariant {
  id: number;
  lead_time: number;
  rank: number;
  rate: number;
  statistics: Statistics;
  status: string;
  properties: Properties;
  digiplus: Digiplus2;
  warranty: Warranty;
  seller: Seller;
  digiclub: Digiclub;
  price: Price;
  shipment_methods: ShipmentMethods;
  has_importer_price: boolean;
  manufacture_price_not_exist: boolean;
  has_best_price_in_last_month: boolean;
  color?: Color;
  buy_box_notices?: BuyBoxNotice[];
  insurance?: Insurance;
}

export interface Statistics {
  totally_satisfied: TotallySatisfied;
  satisfied: Satisfied;
  neutral: Neutral;
  dissatisfied: Dissatisfied;
  totally_dissatisfied: TotallyDissatisfied;
  total_count: number;
  total_rate: number;
}

export interface TotallySatisfied {
  rate_count: number;
  rate: number;
}

export interface Satisfied {
  rate_count: number;
  rate: number;
}

export interface Neutral {
  rate_count: number;
  rate: number;
}

export interface Dissatisfied {
  rate_count: number;
  rate: number;
}

export interface TotallyDissatisfied {
  rate_count: number;
  rate: number;
}

export interface Properties {
  is_fast_shipping: boolean;
  is_ship_by_seller: boolean;
  is_multi_warehouse: boolean;
  has_similar_variants: boolean;
  is_rural: boolean;
  in_digikala_warehouse: boolean;
}

export interface Digiplus2 {
  services: string[];
  services_summary: string[];
  service_list: ServiceList2[];
  is_jet_eligible: boolean;
  cash_back: number;
  is_general_location_jet_eligible: boolean;
  fast_shipping_text?: string;
}

export interface ServiceList2 {
  title: string;
}

export interface Warranty {
  id: number;
  title_fa: string;
  title_en: string;
}

export interface Seller {
  id: number;
  title: string;
  code: string;
  url: string;
  rating: Rating2;
  properties: Properties2;
  stars: number;
  grade: Grade;
  registration_date: string;
}

export interface Rating2 {
  total_rate: number;
  total_count: number;
  commitment: number;
  no_return: number;
  on_time_shipping: number;
}

export interface Properties2 {
  is_trusted: boolean;
  is_official: boolean;
  is_roosta: boolean;
  is_new: boolean;
}

export interface Grade {
  label: string;
  color: string;
}

export interface Digiclub {
  point: number;
}

export interface Price {
  selling_price: number;
  rrp_price: number;
  order_limit: number;
  is_incredible: boolean;
  is_promotion: boolean;
  is_locked_for_digiplus: boolean;
  bnpl_active: boolean;
  discount_percent: number;
  timer?: number;
  badge?: Badge;
  is_digiplus_promotion?: boolean;
  is_digiplus_early_access?: boolean;
  is_application_incredible?: boolean;
  is_lightening_deal?: boolean;
  is_plus_early_access: boolean;
  sold_percentage?: number;
}

export interface Badge {
  title: string;
  color: string;
}

export interface ShipmentMethods {
  description: string;
  has_lead_time: boolean;
  providers?: Provider[];
}

export interface Provider {
  title: string;
  description: string;
  has_lead_time: boolean;
  type: string;
}

export interface Color {
  id: number;
  title: string;
  hex_code: string;
}

export interface BuyBoxNotice {
  text: string;
  text_color: string;
  icon: string;
  icon_color: string;
}

export interface Insurance {
  covers: Cover[];
  base_premium: number;
  discount: number;
  tax: number;
  total_premium: number;
  terms_and_conditions: string;
  before_discount: number;
  discount_percent: number;
}

export interface Cover {
  description: string;
  maxUseCount?: number;
}

export interface Properties3 {
  is_fast_shipping: boolean;
  is_ship_by_seller: boolean;
  free_shipping_badge: boolean;
  is_multi_warehouse: boolean;
  is_fake: boolean;
  has_gift: boolean;
  min_price_in_last_month: number;
  is_non_inventory: boolean;
  is_ad: boolean;
  is_jet_eligible: boolean;
  is_medical_supplement: boolean;
}

export interface Color2 {
  id: number;
  title: string;
  hex_code: string;
}

export interface Category {
  id: number;
  title_fa: string;
  title_en: string;
  code: string;
  image?: Image;
}

export interface Image {
  storage_ids: StorageIds;
  url: string[];
  webp_url: string[];
}

export interface StorageIds {
  '1': any;
}
