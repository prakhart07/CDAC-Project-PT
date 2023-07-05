<div className="main-block">
  <div className="left-part">
    <i className="fas fa-graduation-cap" />
    <h1>Register to our courses</h1>
    <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
    <div className="btn-group">
      <a className="btn-item">Learn HTML</a>
      <a className="btn-item">Select Quiz</a>
    </div>
  </div>
  <form action="/">
    <div className="title">
      <i className="fas fa-pencil-alt" /> 
      <h2>Register here</h2>
    </div>
    <div className="info">
      <input className="fname" type="text" name="name" placeholder="Full name" />
      <input type="text" name="name" placeholder="Email" />
      <input type="text" name="name" placeholder="Phone number" />
      <input type="password" name="name" placeholder="Password" />
      <select>
        <option value="course-type" selected>Course type*</option>
        <option value="short-courses">Short courses</option>
        <option value="featured-courses">Featured courses</option>
        <option value="undergraduate">Undergraduate</option>
        <option value="diploma">Diploma</option>
        <option value="certificate">Certificate</option>
        <option value="masters-degree">Masters degree</option>
        <option value="postgraduate">Postgraduate</option>
      </select>
    </div>
    <div className="checkbox">
      <input type="checkbox" name="checkbox" /><span>I agree to the <a>Privacy Poalicy for W3Docs.</a></span>
    </div>
    <button type="submit" href="/">Submit</button>
  </form>
</div>