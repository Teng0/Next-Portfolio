import Topics from "./forum/categories/[category]";
const Home = () => (
  <>
    {/* HOME PAGE STARTS */}
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Portfolios</h1>
        </div>
      </div>
    </section>
    <section className="pb-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card subtle-shadow no-border">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text fs-2">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer no-border">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card subtle-shadow no-border">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text fs-2 ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer no-border">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card subtle-shadow no-border">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text fs-2 ">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="card-footer no-border">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </section>
    <a href="" className="btn btn-main bg-blue ttu">
      See More Portfolios
    </a>
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Ask Me</h1>
        </div>
      </div>
    </section>
    <section className="pb-5">
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start py-3 subtle-shadow no-border"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 black">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <div className="avatar-container my-2">
            <img
              src="https://via.placeholder.com/150"
              className="avatar-image mr-2"
            ></img>
            <span className="avatar-title">Filip Jerga</span>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 black">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <div className="avatar-container my-2">
            <img
              src="https://via.placeholder.com/150"
              className="avatar-image mr-2"
            ></img>
            <span className="avatar-title">Filip Jerga</span>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action flex-column align-items-start mt-3 py-3 subtle-shadow no-border"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1 black">List group item heading</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <div className="avatar-container my-2">
            <img
              src="https://via.placeholder.com/150"
              className="avatar-image mr-2"
            ></img>
            <span className="avatar-title">Filip Jerga</span>
          </div>
        </a>
      </div>
    </section>
    <a href="" className="btn btn-main bg-blue ttu">
      See More Posts
    </a>
    {/* HOME PAGE ENDS */}
    {/* FORUM CATEGORIES START */}
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Categories</h1>
        </div>
      </div>
    </section>

    {/* FORUM CATEGORIES ENDS */}
    {/* TOPICS PAGE STARTS */}
    <Topics />
    {/* POSTS PAGE STARTS */}

    {/* LOGIN PAGE STARTS */}
    <section className="section-title">
      <div className="px-2">
        <div className="pt-5 pb-4">
          <h1>Login Page</h1>
        </div>
      </div>
    </section>
    <div className="bwm-form">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1 className="page-title">Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-main bg-blue py-2 ttu">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* LOGIN PAGE ENDS */}

    {/* REPLIER STARTS */}
    {/* <div className='reply-controls is-open'> */}
    <div className="reply-controls">
      <div className="reply-area">
        <div className="reply-to">
          Reply To: <span className="text ml-2">User1</span>
        </div>
        <div className="fj-editor-input">
          <input name="title" placeholder="Topic title" type="text"></input>
        </div>
        <div className="fj-editor">
          <div className="fj-editor-textarea-wrapper">
            <textarea name="content" placeholder="Type here"></textarea>
          </div>
          <div className="fj-editor-preview-wrapper">
            <div className="preview">
              <p></p>
            </div>
          </div>
        </div>
        <div className="submit-area">
          <div className="send mr-auto">
            <button href="#" className="btn btn-main bg-blue py-2 ttu">
              Reply
            </button>
            <a className="btn py-2 ttu gray-10">Cancel</a>
          </div>
          <div>
            <a className="btn py-2 ttu gray-10">hide preview</a>
          </div>
        </div>
      </div>
    </div>
    {/* REPLIER ENDS */}
    {/* FOOTER STARTS */}
    <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
      <div className="container text-center">
        <small>Copyright &copy; Your Website</small>
      </div>
    </footer>
    {/* FOOTER ENDS */}
  </>
);

export default Home;
