import style from "./home.module.css";
import rcet from "./images/RCET.jpg";
import photo from "./images/Royal.jpg";
const Home = () => {
  return (
    <div className={style.home}>
      <div class="container first-pic">
        <img className={style.pic1} src={rcet} />
      </div>
      <marquee behavior="rotate" direction="left">
        Welcome to Royal College of Engineering and Technology, Thrissur
      </marquee>
      <img className={style.pic2} src={photo} />
      <div class="container">
        <div class="row text-center">
          <h2 class="mb-5 courses">Courses</h2>
          <div class="col mb-4 tech">B.TECH</div>
          <div class="col mb-4 tech">M.TECH</div>
        </div>
        <div class="row fs-5 stream">
          <div class="col">
            <i class="fa-solid fa-graduation-cap"></i>Electrical and Electronics
            Engineering
          </div>
          <div class="col ps-5">
            <i class="fa-solid fa-graduation-cap ms-4"></i>Computer Science and
            Engineering
          </div>
        </div>
        <div class="row fs-5 stream ">
          <div class="col">
            <i class="fa-solid fa-graduation-cap "></i>Electronics and
            Communication Engineering
          </div>
          <div class="col ps-5">
            <i class="fa-solid fa-graduation-cap ms-4"></i>Mechanical
            Engineering
          </div>
        </div>

        <div class="row fs-5 stream">
          <div class="col">
            <i class="fa-solid fa-graduation-cap"></i>Mechanical Engineering
          </div>
        </div>
        <div class="row fs-5 stream">
          <div class="col">
            <i class="fa-solid fa-graduation-cap"></i>Computer Science and
            Engineering
          </div>
        </div>
        <div class="row fs-5 stream">
          <div class="col">
            <i class="fa-solid fa-graduation-cap"></i>Civil Engineering
          </div>
        </div>
        <div class="row fs-5 stream">
          <div class="col">
            <i class="fa-solid fa-graduation-cap"></i>Artificial Intelligence
            and Data Science
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
