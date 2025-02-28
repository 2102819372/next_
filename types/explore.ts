export type banner = {
  title: string;
  description: string;
  imageUrl: string;
  mobileImageUrl: string;
  gotoUrl: string;
  gotoSchema: string;
  buttonText: string;
};
export type list = {
  type: "TYPE_PREVIEW_TITLE" | "TYPE_NORMAL_TITLE" | "TYPE_SLIDER";
  normalTitleCard?: {
    title: string;
    button: {
      jumpUrl: string;
      jumpMobileUrl: string;
      jumpSchema: string;
    };
    filterParams: {
      ids: string[];
    };
    items: {
      subCardNormal: {
        baseSubCard: {
          clickJumpUrl: string;
          clickJumpSchema: string;
        };
        botSummary: {
          id: string;
          name: string;
          description: string;
          author: {
            id: string;
            name: string;
            nameTag: string;
          };
          logoUrl: string;
          previewInfo: {
            image: string;
          };
          title: string;
          subTitle: string;
          imageUrl: string;
          previewImage: string;
          button: {
            title: string;
            jumpUrl: string;
            jumpMobileUrl: string;
          };
        };
        imageUrl: string;
        subTitle: string;
        previewImage: string;
      };
    }[];
  };
  sliderCard?: {
    items: {
      subCardFeatured: {
        baseSubCard: {
          clickJumpUrl: string;
          clickJumpSchema: string;
        };
        backgroundImageUrl: string;
        subTitle: string;
        title: string;
        bottomZone: {
          image: string;
          title: string;
          subTitle: string;
          button: {
            title: string;
            jumpUrl: string;
            jumpMobileUrl: string;
          };
        };
        extraInfo: {
          article_id: string;
          article_title: string;
          bot_id: string;
          bot_name: string;
          feature_type: string;
        };
      };
    };
    title: string;
  };
};
