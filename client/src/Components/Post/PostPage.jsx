import React from 'react'
import images from '../../constants/images'
import './PostPage.css'

const PostPage = () => {
  return (
    <div className="main__postPage">
        <div className="writePage__img">
            <img src={images.HeaderWrite} alt="ImageWrite"/>  
        </div>
        <div className="post__content">
            <div className="post__content-header">
                <h1>The World's Most Dangerous Technology Ever Made</h1>
                <div className="post__content-info">
                    <div className="content__box-info">
                        <p>Nguyen The Dan</p>
                        <p className='dot'>.</p>
                        <p>May 7, 2019 (10 mins read)</p>
                    </div>
                    <div className="content__info-tags">
                        <p>#technology#tech#career</p>
                    </div>
                </div>
            </div>
            <div className="post__content-main">
                <p>
                Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore. Aliquip consectetur labore consectetur dolor exercitation est minim quis. Magna non irure qui ex est laborum nulla excepteur qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea excepteur proident ex commodo irure est.<br/>
                <br/>
                Nisi commodo qui pariatur enim sint laborum consequat enim in officia. Officia fugiat incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit duis.<br/>
                <br/>
                Est Lorem labore consectetur minim sit eu eiusmod mollit velit. Consectetur voluptate ex amet id eiusmod laborum irure. Aliquip ad qui id exercitation irure amet commodo nisi quis. Occaecat minim incididunt eiusmod nostrud veniam quis culpa.<br/>
                Nisi ipsum et consequat id deserunt excepteur. Cillum non pariatur culpa ut occaecat laboris eu. Ullamco ad Lorem et elit laboris eu qui irure nulla qui culpa et. Cupidatat sunt ipsum proident aute exercitation do tempor aliqua cupidatat quis non exercitation. Adipisicing do minim dolore nulla mollit. Adipisicing incididunt irure ipsum et in esse ipsum elit tempor.<br/>
                <br/>
                Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim fugiat cillum enim ad occaecat sint qui elit labore mollit sunt laborum fugiat consequat. Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum enim dolore ad enim enim id. Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt aliqua duis sunt occaecat. Laborum incididunt commodo ullamco proident quis.
                </p>
            </div>
        </div>
        <div className="post__author">
            <p className="post__author-title">ABOUT THE AUTHOR</p>
            <div className="about__profile">
                <img src={images.avatarLarge} alt="avatar" />
                <div className="about__profile-content">
                <h1>Nguyen The Dan</h1>
                <p className='my'>@gay</p>
                <p>Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</p>
                <div className="social__info">
                    <div className="social__info-website">
                    <i class="fa-solid fa-link"></i>
                    <p>arthurblack.com</p>
                    </div>
                    <div className="social__info-app">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="post__comment">
            <p className="post__comment-tittle">COMMENTS</p>
            <div className="post__comment-main">
                <div className="comment__info">
                    <div className="comment__info-user">
                        <img src={images.avatacomment} alt="user" />
                        <p className="user__name">amyrobson</p>
                        <p className="user__reply">May 20, 2002 at 12:01</p>
                    </div>
                    <div className="icon-reply">
                        <i class="fa-solid fa-reply"></i>
                        <p className="icon__content">Reply</p>
                    </div>
                </div>
                <div className="comment__reply">
                    <p>
                        You've almost done it. However setting flex: 0 0 declaration to the columns would prevent them from growing/shrinking; And the parameter would define the width of columns. In addition, you could use CSS3  expression to specify the height of columns with the respect to the height of the header.           
                    </p>
                </div>
            </div>
            <div className="post__comment-main">
                <div className="comment__info">
                    <div className="comment__info-user">
                        <img src={images.avatacomment} alt="user" />
                        <p className="user__name">maxblagun</p>
                        <p className="user__reply">May 12, 2022 at 17:06</p>
                    </div>
                    <div className="icon-reply">
                        <i class="fa-solid fa-reply"></i>
                        <p className="icon__content">Reply</p>
                    </div>
                </div>
                <div className="comment__reply">
                    <p>
                    This is copied from above, but condensed slightly and re-written in semantic terms. Note: #Container has display: flex; and flex-direction: column;, while the columns have flex: 3; and flex: 2; (where "One value, unitless number" determines the flex-grow property) per MDN flex docs.
                    </p>
                </div>
            </div>
            <div className="post__comment-main">
                <div className="comment__info">
                    <div className="comment__info-user">
                        <img src={images.avatacomment} alt="user" />
                        <p className="user__name">ramsesmiron</p>
                        <p className="user__reply">May 2, 2022 at 13:41</p>
                    </div>
                    <div className="icon-reply">
                        <i class="fa-solid fa-reply"></i>
                        <p className="icon__content">Reply</p>
                    </div>
                </div>
                <div className="comment__reply">
                    <p>
                    <span>@maxblagun</span> I am assuming that you have used height attribute at both so i am comparing it with a height left do it with JavaScript.
Another idea can be found here HTML/CSS: Making two floating divs the same height.
                    </p>
                </div>
            </div>
            <div className="post__comment-reply">
                <div className="boder__left"></div>
                <div className="post__comment-main mb-65">
                    <div className="comment__info">
                        <div className="comment__info-user">
                            <img src={images.avatacomment} alt="user" />
                            <p className="user__name">juliusomo</p>
                            <p className="user__reply">May 2, 2022 at 13:41</p>
                        </div>
                        <div className="icon-reply">
                            <i class="fa-solid fa-reply"></i>
                            <p className="icon__content">Reply</p>
                        </div>
                    </div>
                    <div className="comment__reply">
                        <p>
                            <span>@ramsesmiron</span> hope I'm not saying anything silly, but this doesn't work if you have padding or borders on only one of the left/right divs. They will add to the outside height of the div.
                        </p>
                    </div>
                </div>
            </div>
            <div className="rep__comment">
                <img src={images.avatarLarge} alt="" />
                <textarea name="repcommnet" id="" cols="120" rows="3" className="box__rep-comment" placeholder="Add a comment..."></textarea>
                <button className="btn__push-comment">SEND</button>
            </div>
        </div>
    </div>
  )
}

export default PostPage