import React from "react";
import {
  FacebookShareCount,
  RedditShareCount,
  TumblrShareCount,
  HatenaShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  HatenaIcon,
} from "react-share";
import ShareImg from "../../../static/icons/share-yellow.png";

// markup
const ShareComponent = ({ title, description, shareUrl }) => {
  return (
    <div className="mt-2">
      {/* <a href="#my-modal-2" className="flex flex-row items-center"> */}
      <label htmlFor="my-modal-4" className="modal-button flex flex-row items-center cursor-pointer">
        <img src={ShareImg} alt="Share" className="h-[30px] mr-1" />
        <span className="font-bold text-black">Share</span>
      </label>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2 modal-close-button">✕</label>
          <h3 className="font-bold text-lg mb-10">Share Article: {title}</h3>
          <div className="grid grid-flow-col grid-rows-2 grid-cols-6 gap-8">
            <div>
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <div>
                <FacebookShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count"
                >
                  {(count) => count}
                </FacebookShareCount>
              </div>
            </div>

            <div className="Demo__some-network">
              <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
            </div>

            <div className="Demo__some-network">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>

            <div className="Demo__some-network">
              <TelegramShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>

            <div className="Demo__some-network">
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>

            <div className="Demo__some-network">
              <LinkedinShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>

            <div className="Demo__some-network">
              <RedditShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button"
              >
                <RedditIcon size={32} round />
              </RedditShareButton>

              <div>
                <RedditShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count"
                />
              </div>
            </div>

            <div className="Demo__some-network">
              <TumblrShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TumblrIcon size={32} round />
              </TumblrShareButton>

              <div>
                <TumblrShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count"
                />
              </div>
            </div>

            <div className="Demo__some-network">
              <LivejournalShareButton
                url={shareUrl}
                title={title}
                description={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LivejournalIcon size={32} round />
              </LivejournalShareButton>
            </div>

            <div className="Demo__some-network">
              <MailruShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <MailruIcon size={32} round />
              </MailruShareButton>
            </div>

            <div className="Demo__some-network">
              <EmailShareButton
                url={shareUrl}
                subject={title}
                body="body"
                className="Demo__some-network__share-button"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </div>
            <div className="Demo__some-network">
              <ViberShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <ViberIcon size={32} round />
              </ViberShareButton>
            </div>

            <div className="Demo__some-network">
              <WorkplaceShareButton
                url={shareUrl}
                quote={title}
                className="Demo__some-network__share-button"
              >
                <WorkplaceIcon size={32} round />
              </WorkplaceShareButton>
            </div>

            <div className="Demo__some-network">
              <LineShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <LineIcon size={32} round />
              </LineShareButton>
            </div>

            <div className="Demo__some-network">
              <PocketShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <PocketIcon size={32} round />
              </PocketShareButton>
            </div>

            <div className="Demo__some-network">
              <InstapaperShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <InstapaperIcon size={32} round />
              </InstapaperShareButton>
            </div>

            <div className="Demo__some-network">
              <HatenaShareButton
                url={shareUrl}
                title={title}
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button"
              >
                <HatenaIcon size={32} round />
              </HatenaShareButton>

              <div>
                <HatenaShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count"
                />
              </div>
            </div>
            </div>
        </label>
      </label>
    </div>
  );
};

export default ShareComponent;
