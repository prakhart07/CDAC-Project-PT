<div className="main-block">
  <form action="/">
    <h1>Course Evaluation Form</h1>
    <p></p>
    <h3>Rate this course using the following scale:</h3>
    <div className="btn-block">
      <input type="text" defaultValue="" name="uniqueid" required />
      <button type="submit" href="/">Send</button>
    </div>
    <hr />
    <div>
      <h4>Course Offering<span className="required">*</span></h4>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th></th>
            
          </tr>
          <tr>
            <td className="first-col">Subject name:</td>
            <td><select>
            <option>Choose subject...</option>
              <option>Maths</option>
              <option>physics</option>
              <option>Chemistry</option>
              <option>biology</option>
              <option>History</option>
              <option>Geography</option>
              <option>others to be inserted...</option>
              </select></td>
            
          </tr>
        </tbody></table>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th>Subjetc Marks:</th>
            
          </tr>
          <tr>
            <td className="first-col"></td>
            <td><input type="number" defaultValue="" name="number" required /></td>
            
          </tr>
        </tbody></table>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <tr>
            <td className="first-col">Class location &amp; equipment</td>
            <td><input type="text" defaultValue="none" name="equipment" required /></td>
            
          </tr>
        </tbody></table>
    </div>
    <div>
      <h4>Course:</h4>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th></th>
            
          </tr>
          <tr>
            <td className="first-col"></td>
            <td><input type="text" defaultValue="none" name="knowledge" /></td>
            
          </tr>
        </tbody></table>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <tr>
            <td className="first-col">Communicated the course material effectively</td>
            <td><input type="radio" defaultValue="none" name="effectively" /></td>
            <td><input type="radio" defaultValue="none" name="effectively" /></td>
            <td><input type="radio" defaultValue="none" name="effectively" /></td>
            <td><input type="radio" defaultValue="none" name="effectively" /></td>
            <td><input type="radio" defaultValue="none" name="effectively" /></td>
          </tr>
        </tbody></table>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <tr>
            <td className="first-col">The instructor encouraged students to</td>
            <td><input type="radio" defaultValue="none" name="students" /></td>
            <td><input type="radio" defaultValue="none" name="students" /></td>
            <td><input type="radio" defaultValue="none" name="students" /></td>
            <td><input type="radio" defaultValue="none" name="students" /></td>
            <td><input type="radio" defaultValue="none" name="students" /></td>
          </tr>
        </tbody></table>
      <table>
        <tbody><tr>
            <th className="first-col" />
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          <tr>
            <td className="first-col">Participate in course</td>
            <td><input type="radio" defaultValue="none" name="participate" /></td>
            <td><input type="radio" defaultValue="none" name="participate" /></td>
            <td><input type="radio" defaultValue="none" name="participate" /></td>
            <td><input type="radio" defaultValue="none" name="participate" /></td>
            <td><input type="radio" defaultValue="none" name="participate" /></td>
          </tr>
        </tbody></table>
    </div>
    <div className="comments-block">
      <h4 className="comments">Comments<small>Please let us know what could be done to improve this course</small></h4>
      <div className="answer">
        <textarea rows={5} defaultValue={""} />
      </div>
    </div>
    <div className="radio-block">
      <p className="question">May We Use Your Quotes / Comments?</p>
      <div className="question-answer">
        <div>
          <input type="radio" defaultValue="none" id="radioYes" name="comments" />
          <label htmlFor="radioYes" className="radio">Yes</label>
        </div>
        <div>
          <input type="radio" defaultValue="none" id="radioNo" name="comments" />
          <label htmlFor="radioNo" className="radio">No</label>
        </div>
      </div>
    </div>
    <div className="btn-block">
      <button type="submit" href="/">Send</button>
    </div>
  </form>
</div>