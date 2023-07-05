<div>
  <title>Car Booking Form</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
  <div className="testbox">
    <form action="/">
      <div className="banner">
        <h1>Car Booking Form</h1>
      </div>
      <div className="item">
        <p>Name</p>
        <div className="name-item">
          <input type="text" name="name" placeholder="First" />
          <input type="text" name="name" placeholder="Last" />
        </div>
      </div>
      <div className="item">
        <p>Email</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p>Phone</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p>Number of Passengers</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p>Contact Address</p>
        <input type="text" name="name" placeholder="Street address" />
        <input type="text" name="name" placeholder="Street address line 2" />
        <div className="city-item">
          <input type="text" name="name" placeholder="City" />
          <input type="text" name="name" placeholder="Region" />
          <input type="text" name="name" placeholder="Postal / Zip code" />
          <select>
            <option value>Country</option>
            <option value={1}>Russia</option>
            <option value={2}>Germany</option>
            <option value={3}>France</option>
            <option value={4}>Armenia</option>
            <option value={5}>USA</option>
          </select>
        </div>
      </div>
      <div className="question">
        <p>Vehicle</p>
        <div className="question-answer">
          <div>
            <input type="radio" defaultValue="none" id="radio_1" name="vehicle" />
            <label htmlFor="radio_1" className="radio"><span>Limousine (8-12 person)</span></label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_2" name="vehicle" />
            <label htmlFor="radio_2" className="radio"><span>SUV (6-7 person)</span></label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_3" name="vehicle" />
            <label htmlFor="radio_3" className="radio"><span>Van (12-15 person)</span></label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_4" name="vehicle" />
            <label htmlFor="radio_4" className="radio"><span>Bus (50+ person)</span></label>
          </div>
          <div>
            <input type="radio" defaultValue="none" id="radio_5" name="vehicle" />
            <label htmlFor="radio_5" className="radio other"><span>other:</span></label>
            <input className="other" type="text" name="name" />
          </div>
        </div>
      </div>
      <div className="item">
        <p>Pick Up Date</p>
        <input type="date" name="bdate" />
        <i className="fas fa-calendar-alt" />
      </div>
      <div className="item">
        <p>Pick Up Time</p>
        <input type="time" name="name" />
        <i className="fas fa-clock" />
      </div>
      <div className="item">
        <p>If pick up from the airport, please enter airport name</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p>Flight Number</p>
        <input type="text" name="name" />
      </div>
      <div className="item">
        <p>Pick Up Point</p>
        <input type="text" name="name" placeholder="Street address" />
        <input type="text" name="name" placeholder="Street address line 2" />
        <div className="city-item">
          <input type="text" name="name" placeholder="City" />
          <input type="text" name="name" placeholder="Region" />
          <input type="text" name="name" placeholder="Postal / Zip code" />
          <select>
            <option value>Country</option>
            <option value={1}>Russia</option>
            <option value={2}>Germany</option>
            <option value={3}>France</option>
            <option value={4}>Armenia</option>
            <option value={5}>USA</option>
          </select>
        </div>
      </div>
      <div className="item">
        <p>Destination</p>
        <input type="text" name="name" placeholder="Street address" />
        <input type="text" name="name" placeholder="Street address line 2" />
        <div className="city-item">
          <input type="text" name="name" placeholder="City" />
          <input type="text" name="name" placeholder="Region" />
          <input type="text" name="name" placeholder="Postal / Zip code" />
          <select>
            <option value>Country</option>
            <option value={1}>Russia</option>
            <option value={2}>Germany</option>
            <option value={3}>France</option>
            <option value={4}>Armenia</option>
            <option value={5}>USA</option>
          </select>
        </div>
      </div>
      <div className="item">
        <p>Notes</p>
        <textarea rows={3} defaultValue={""} />
      </div>
      <div className="btn-block">
        <button type="submit" href="/">SEND</button>
      </div>
    </form>
  </div>
</div>