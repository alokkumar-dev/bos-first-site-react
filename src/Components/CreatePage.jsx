export const Create = () => {
  return (
    <>
      <h3>Create Page</h3>
      <form action="">
          
        <label htmlFor="name">Enter Pat Name: </label>

        <input type="text" id="name" placeholder="enter name" required />
        <br />
        <label htmlFor="city">Enter City: </label>
        
        <input type="text" id="city" placeholder="enter city" required />
        <br />
        <label htmlFor="address">Enter Address: </label>
        
        <input type="text" id="address" placeholder="enter address" required />
        <br />
        <label htmlFor="capacity">Enter Capacity: </label>
        
        <input type="text" id="capacity" placeholder="enter capacity" required />
        <br />
        <label htmlFor="cost">Enter Cost: </label>
        
        <input type="number" id="cost" placeholder="enter cost" required />
        <br />
        <label htmlFor="selectVerify">Verified: </label>
        <select name="" id="selectVerify">
          <br />
          <option value="">---Select---</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <label htmlFor="rating">Give Rating: </label>
        
        <input type="text" id="rating" placeholder="enter rating" required />
        <br />

        <label htmlFor="Accepted_Pet_type">Accepted Pet type: </label>
        
        <select name="" id="Accepted_Pet_type">
          <br />
          <option value="">--Selec--</option>
          <option value="Dog">Dog</option>
          <option value="Cats">Cats</option>
          <option value="Rabbits">Rabbits</option>
        </select><br />
        <label htmlFor="Accepted_Pet_size">Accepted Pet size</label>
        <select name="" id="Accepted_Pet_size">
          <br />
          <option value="">--Select--</option>
          <option value="1-5kg">1-5kg</option>
          <option value="5-10kg">5-10kg</option>
          <option value="10-20kg">10-20kg</option>
          <option value="20-40kg">20-40kg</option>
          <option value="40+kg">40+kg</option>
        </select>
        <br />
        <label htmlFor="adult_supervision">Level of adult supervision: </label>
        
        <select name="" id="adult_supervision">
          <br />
          <option value="yes">---Select---</option>
          <option value="Pets will never be left unattended">
            Pets will never be left unattended
          </option>
          {/* <option value="The place your pet will be if they are left unsupervised at home">
            The place your pet will be if they are left unsupervised at home
          </option> */}
          <option value="Free roam of the house">Free roam of the house</option>
        </select><br />
        <label htmlFor="sleep_place">Place of sleep: </label>
        <select name="" id="sleep_place">
          <br />
          <option value="">--Sleep--</option>
          <option value="Wherever they want">Wherever they want</option>
          <option value="Need some specific place">Need some specific place</option>
        </select>
        <br />
        <label htmlFor="potty">Number of potty per day: </label>
        <input type="number" id="potty" min={1} max={5} required />
        <input type="submit" value={"Submit"} required />
      </form>
    </>
  )
};
