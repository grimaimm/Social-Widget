import React from 'react';
import ButtonArrow from './../Elemen/buttonArrow';

const SectionSocialLinks = ({ link  }) => {
  return (
    <div className={link.classGrid}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <div className="widgetBlack flex flex-col justify-between gap-4 p-3 rounded-2xl transition-all duration-500 hover:scale-95">
          <div className="flex justify-between">
            <div className="widgetBlack-logo flex items-center">
              <div dangerouslySetInnerHTML={{ __html: link.svgIcon }}></div>
            </div>
            <div className="flex items-start">
              <ButtonArrow />
            </div>
          </div>
          {link.playList && (
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-center">
              <div className="playlist-card relative h-auto bg-white/50 backdrop-blur-2xl overflow-hidden border border-white rounded-lg shadow-xl">
                <div className="absolute inset-0 w-full h-full brightness-80"></div>
                <div className="relative w-full h-full px-2 py-2 backdrop-blur-2xl">
                  <div className="overflow-hidden">
                    <img className="playlist-image mx-auto rounded-lg object-cover transition-all duration-700 hover:scale-105" src={link.playList.img} alt="Playlist Cover" />
                  </div>
                  <div className="flex flex-col mt-3">
                    <span className="text-[11px] text-[#1d1d1d] tracking-tight font-semibold">{link.playList.titlePlaylist}</span>
                    <div
                        className="border-b-2 pt-1 mb-1 border-solid border-[#1d1d1d] opacity-75 aos-init aos-animate"
                        data-aos="flip-down"
                        data-aos-duration={1000}
                    />
                    <div className="flex justify-between">
                      <div dangerouslySetInnerHTML={{ __html: link.playList.svgRandom }}></div>
                      <div dangerouslySetInnerHTML={{ __html: link.playList.svgPlay }}></div>
                      <div dangerouslySetInnerHTML={{ __html: link.playList.svgRepeat }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-[#FBFBFB] text-[14px] font-bold">{link.linkTitle}</span>
              <span className="font-light text-[10px] text-[#FBFBFB]">{link.username}</span>
            </div>
            {link.buttonFollow && (
              <div className="items-end lg:flex hidden">
                <button className="btn flex btn-follow-widgetBlack px-2 py-1 rounded-full">{link.buttonFollow}</button>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export default SectionSocialLinks;