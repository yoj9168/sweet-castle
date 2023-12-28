export type WebsiteConfig = {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  naverBlog?: string;
  phoneCall?: String;
  map?: String;
  /**
   * full url, no username
   */
  /**
   * hide or show all email subscribe boxes
   */
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  /**
   * Shows all post tags in main index view and post view if true
   * Otherwise only shows first (primary) tag
   */
  showAllTags: boolean;
};

const config: WebsiteConfig = {
  title: '남해 스카이캐슬',
  description: '당신의 삶에 감동을 선물하는 남해 스카이캐슬! 자신있게 선보입니다!',
  coverImage: 'img/home.jpg',
  logo: 'img/logo.jpg',
  lang: 'kor',
  siteUrl: 'https://remarkable-marzipan-c0a23d.netlify.app',
  naverBlog: 'https://m.blog.naver.com/PostView.naver?blogId=oksen2&logNo=223293756800&navType=by',
  phoneCall: '010-5367-8091',
  map: 'https://map.naver.com/p/search/%EB%82%A8%ED%95%B4%EC%9D%8D%20%ED%99%94%EC%A0%84%EB%A1%9C%20122%EB%B2%88%EA%B8%B8%2037-26/address/14237519.5837125,4142750.109334,%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%82%A8%ED%95%B4%EA%B5%B0%20%EB%82%A8%ED%95%B4%EC%9D%8D%20%ED%99%94%EC%A0%84%EB%A1%9C122%EB%B2%88%EA%B8%B8%2037-26,new?c=19.00,0,0,0,dh&isCorrectAnswer=true',
  mailchimpAction:
    'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: '\n오시는 길: 남해읍 화전로 122번길 37-26 | 연락처 : 010-5367-8091',
  showAllTags: true,
};

export default config;
