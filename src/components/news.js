import author from "../img/author.png";
import icon from "../img/icon.png";
import img1 from "../img/img.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

function News() {
    return (
 
        <div className="container__news">

                <div className="news__list">

                    <div className="news">
                        <div className="news__top">
                            <div className="author__info">
                                <img src={author} alt="#"/>
                                <p className="author__text">Authors name <span>in</span>  <span>Topics Name </span>   · <span> 7 july</span> </p>
                            </div>
                            <div className="author__title"> 7 Practical CSS Tips </div>
                            <p className="author__content">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                        </div>
                        <div className="news__bottom">
                            <div className="author__bottom-left">
                                <button className="author__bth" >JavaScript</button>
                                <p className="author__txt"> 12 min read <span>·</span>Selected for you</p>
                            </div>
                            <div className="author__bottom-right">
                                <div class="author__icon">
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="image">
                        <img src={img1} alt="#"/>
                    </div>

                </div>

                <div class="news__list">

                    <div class="news">
                        <div class="news__top">
                            <div class="author__info">
                                {/* <img src="img/author.png" alt="#"> */}
                                <p class="author__text">Authors name <span>in</span> <span>Topics Name </span> · <span> 7 july</span> </p>
                            </div>
                            <div class="author__title">7 Practical CSS Tips</div>
                            <p class="author__content">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                                You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
                        </div>
                        <div class="news__bottom">
                            <div class="author__bottom-left">
                                <button class="author__bth">JavaScript</button>
                                <p class="author__txt"> 12 min read <span>·</span>Selected for you</p>
                            </div>
                            <div class="author__bottom-right">
                                <div class="author__icon">
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="image">
                        <img src={img2} alt="#"/>
                    </div>

                </div>


                <div class="news__list">

                    <div class="news">
                        <div class="news__top">
                            <div class="author__info">
                                <img src={author} alt="#"/>
                                <p class="author__text">Authors name <span>in</span> <span>Topics Name </span> · <span> 7 july</span> </p>
                            </div>
                            <div class="author__title">7 Practical CSS Tips</div>
                            <p class="author__content">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                                You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
                        </div>
                        <div class="news__bottom">
                            <div class="author__bottom-left">
                                <button class="author__bth">JavaScript</button>
                                <p class="author__txt"> 12 min read <span>·</span>Selected for you</p>
                            </div>
                            <div class="author__bottom-right">
                                <div class="author__icon">
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                    <img src={icon} alt="#"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="image">
                        <img src={img3} alt="#"/>
                    </div>

                </div>

        </div>  
   
    ); 
 }
 export default News;