import objectsButtons from "../utils/videoList.js";
import { timeLeft } from "../utils/utils.js";
import { useEffect, useRef, useState } from "react";

function TimerSection() {
  const [time, setTime] = useState(timeLeft());
  const timeId = useRef();
  const [videoScreen, setVideoScreen] = useState(
    "https://www.youtube.com/embed/ygluZ0tB8S4?si=saeeLYfrKYlUz2Bw"
  );

  function clickButton(video) {
    setVideoScreen(video);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    timeId.current = setInterval(() => {
      setTime(timeLeft);
    }, 1000);

    return () => clearInterval(timeId.current);
  }, []);

  return (
    <>
      <section className="video-section">
        <div className="title-video-section">FALTAN</div>
        <div className="flex justify-center">
          <div className="flex flex-row justify-between timer-circles">
            <div className="md:px-3 px-1">
              <div className="circle-time">
                <div className="text-circle">
                  <span>{JSON.stringify(time.days)}</span> DÍAS
                </div>
              </div>
            </div>
            <div className="md:px-3 px-1">
              <div className="circle-time">
                <div className="text-circle">
                  <span>{JSON.stringify(time.hours)}</span> HRS
                </div>
              </div>
            </div>
            <div className="md:px-3 px-1">
              <div className="circle-time">
                <div className="text-circle">
                  <span>{JSON.stringify(time.minutes)}</span> MIN
                </div>
              </div>
            </div>
            <div className="md:px-3 px-1">
              <div className="circle-time">
                <div className="text-circle">
                  <span>{JSON.stringify(time.seconds)}</span> SEG
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-center embed-responsive embed-responsive-16by9">
            <iframe className="video-frame" src={videoScreen}></iframe>
          </div>
        </div>
      </section>
      <section className="video-buttons mt-10">
        <div className="col-12 text-center title-buttons-section p-5 title-buttons">
          CLARO SPORTS EN SOCHI 2014
        </div>
        <div className="flex justify-center">
          <div className="container">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-1 px-6 m-2 text-buttons">
              {objectsButtons.map((object, i) =>
                object.hasImg ? (
                  <div
                    className="text-center grig-3 justify-self-center cursor-pointer hover:opacity-50"
                    key={i}
                    onClick={() => clickButton(object.video)}
                  >
                    <img src={object.img} className="circle-button" />
                    <p>{object.name}</p>
                  </div>
                ) : (
                  <div
                    className="text-center grig-3 justify-self-center cursor-pointer hover:opacity-50"
                    key={i}
                    onClick={() => clickButton(object.video)}
                  >
                    <div className={object.class}>{object.text}</div>
                    <p>{object.name}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TimerSection;
