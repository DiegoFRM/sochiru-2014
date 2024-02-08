import logoSochi from "../assets/logo-sochi-color.png";
import logoClaro from "../assets/logo-claro-sports.png";

function HeaderPage () {
    return (
        <header className="header-main flex justify-center">
        <div className="container">
          <div className="grid grid-cols-4 gap-1 m-2">
            <div className="justify-self-center"> 
              <img src={logoSochi} />
            </div>
            <div className="justify-self-center col-end-5">
              <img src={logoClaro} />
            </div>
          </div>
        </div>
      </header>
    )
}

export default HeaderPage