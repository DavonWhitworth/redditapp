export interface Types {
  kind: string;
  data: TypesData;
}

export interface TypesData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: null;
  children: Child[];
  before: null;
}

export interface Child {
  kind: Kind;
  data: ChildData;
}

export interface ChildData {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: FlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null | string;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: null | string;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: FlairTextColor;
  upvote_ratio: number;
  author_flair_background_color: null | string;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number | null;
  author_flair_template_id: null | string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: Media | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null | string;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null | string;
  author_flair_richtext: FlairRichtext[];
  gildings: Gildings;
  post_hint?: PostHint;
  content_categories: string[] | null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: FlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: null | string;
  likes: null;
  suggested_sort: null | string;
  banned_at_utc: null;
  url_overridden_by_dest?: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null | string;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: FlairTextColor | null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Media | null;
  is_video: boolean;
  link_flair_template_id?: string;
  is_gallery?: boolean;
  media_metadata?: { [key: string]: MediaMetadatum };
  gallery_data?: GalleryData;
}

export interface AllAwarding {
  giver_coin_reward: null;
  subreddit_id: null | string;
  is_new: boolean;
  days_of_drip_extension: number | null;
  coin_price: number;
  id: string;
  penny_donate: null;
  award_sub_type: AwardSubType;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number | null;
  tiers_by_required_awardings: null;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: null;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: null;
  description: string;
  end_date: null;
  sticky_duration_seconds: null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedIcon[];
  icon_format: IconFormat | null;
  icon_height: number;
  penny_price: number | null;
  award_type: AwardType;
  static_icon_url: string;
}

export enum AwardSubType {
  Appreciation = "APPRECIATION",
  Community = "COMMUNITY",
  Global = "GLOBAL",
  Premium = "PREMIUM",
}

export enum AwardType {
  Community = "community",
  Global = "global",
}

export enum IconFormat {
  Apng = "APNG",
  PNG = "PNG",
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export interface FlairRichtext {
  e: E;
  t?: string;
  a?: string;
  u?: string;
}

export enum E {
  Emoji = "emoji",
  Text = "text",
}

export enum FlairTextColor {
  Dark = "dark",
  Light = "light",
}

export enum FlairType {
  Richtext = "richtext",
  Text = "text",
}

export interface GalleryData {
  items: Item[];
}

export interface Item {
  caption?: string;
  media_id: string;
  id: number;
}

export interface Gildings {
  gid_1?: number;
  gid_2?: number;
  gid_3?: number;
}

export interface Media {
  reddit_video: RedditVideo;
}

export interface RedditVideo {
  bitrate_kbps: number;
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: TranscodingStatus;
}

export enum TranscodingStatus {
  Completed = "completed",
}

export interface MediaEmbed {}

export interface MediaMetadatum {
  status: string;
  e: string;
  m: string;
  p: S[];
  s: S;
  id: string;
}

export interface S {
  y: number;
  x: number;
  u: string;
}

export enum WhitelistStatus {
  AllAds = "all_ads",
  NoAds = "no_ads",
  PromoAdultNsfw = "promo_adult_nsfw",
  SomeAds = "some_ads",
}

export enum PostHint {
  HostedVideo = "hosted:video",
  Image = "image",
  Link = "link",
}

export interface Preview {
  images: Image[];
  enabled: boolean;
  reddit_video_preview?: RedditVideo;
}

export interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: Variants;
  id: string;
}

export interface Variants {
  obfuscated?: GIF;
  nsfw?: GIF;
  gif?: GIF;
  mp4?: GIF;
}

export interface GIF {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
}

export enum SubredditType {
  Public = "public",
}

export enum Kind {
  T3 = "t3",
}
