import styles from "./AddNewResourcePageOne.module.css"


const AddNewResourcePageOne = ()  => {

    return (
        <div className={styles.page}>
        
        <div className={styles.leftSide}>
        <h2 className={styles.title}>Add New Resource</h2>
          <p>Organization Name: </p>
        

          <input className={styles.input}  placeholder="Enter Organization Name" type="text" id="name" name="name"/>
          <div className={styles.radioGroup}>
          <label htmlFor="Non-Profit"><strong>Non-Profit</strong></label>
          <input type="radio" id="non-profit" name="type" value="Non-Profit"/>
          <label htmlFor="Profit"><strong>Profit</strong></label>
          <input type="radio" id="profit" name="type"  value="Profit"/>
          </div>
          <p>Main Phone: </p>
          <input className={styles.input} placeholder="Enter Organization Name" type="text" id="phone" name="name"/>
          <p>Organization Mailing Address: </p>
          <input className={styles.input} placeholder="Enter Organization Address" type="text" id="department" name="name"/>
          <p>City: </p>
          <input  className={styles.input}  placeholder="Enter Organization City" type="text" id="department" name="name"/>
          <div className={styles.gridParent}>
            <div>
            <p>State: </p>
          <select className={styles.shortInput} name="states" id = "states">
              <option value="MD"> MD</option>
            </select>

            </div>
            <div>
            <p>ZipCode: </p>
          <input  className={styles.shortInput} placeholder="Enter Organization ZipCode" type="text" id="department" name="name"/>

            </div>
          </div>
         
         
        </div>

        <div className={styles.rightSide}>
            <p>Service Area</p>
            <div className={styles.regions}>
                <form>
                <div >
                <input type="radio" id="National" name="serviceType" value="National"/> 
                <label htmlFor="National"><strong>National</strong></label>

                </div>
               
                 
                 <div >
                 <input type="radio" id="State" name="serviceType" value="State"/> 
                 <label htmlFor="State"><strong>State: </strong></label>
                <select className={styles.stateSelect} name="States" id="States">
                <option value="MD">Maryland</option>
                <option value="AL">Alabama</option>
                <option value="CA">California</option>
                <option value="NJ">New Jersey</option>
               </select>

                 </div>
                  <div >
                  <input type="radio" id="PlanningDistrict" name="serviceType" value="PlanningDistrict"/> 
                 <label htmlFor="PlanningDistrict"><strong>Planning District: </strong></label>
                 <select className={styles.planningSelect} name="PlanningDistricts" id="PlanningDistricts"></select>
                  </div>
            
               <div >
               <input type="radio" id="County" name="serviceType" value="County"/> 
                 <label htmlFor="County"><strong>County: </strong></label>
                 <select className={styles.countySelect}  name="County" id="County"></select>

               </div>
                 
       

                </form>


            

            </div>
            <p>Primary Category: </p>
            <select className={styles.dropDown} name="pCategory" id = "pCategory">
              <option value="hello"> hello</option>
            </select>
            <p>Secondary Category: </p>
            <select className={styles.dropDown} name="sCategory" id = "sCategory">
              <option value="hello"> hello</option>
            </select>
           <div className={styles.buttonArea}>
           <button className={styles.button} type="button">Confirm </button>
          

           </div>
            
          

        

        </div>
         
        </div>
    )




}

export default AddNewResourcePageOne;