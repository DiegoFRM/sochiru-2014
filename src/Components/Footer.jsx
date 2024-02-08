import LogoSochi from "../assets/logo-sochi-color.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <>
      <footer className="flex justify-center p-2">
        <div className="container">
          <div className="grid md:grid-cols-3  gap-10 m-2 items-center">
            <div className="justify-self-center">
                Aviso de privacidad y contacto
            </div>
            <div className="justify-self-center">
              <img src={LogoSochi} />
            </div>
            <div className="justify-self-center grid grid-cols-3 gap-3 items-center">
              <img width="30px" src={twitter} />
              <img width="30px" src={facebook} />
              <img width="30px" src={youtube}/>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
