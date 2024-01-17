import styles from "./AddNewResourcePageThree.module.css"


const AddNewResourcePageThree = ()  => {

    return (
        <div className={styles.page}>
        
        <div className={styles.leftSide}>
        <h2 className={styles.title}>Add New Resource</h2>
     
         
          <p>Organization Website: </p>
          <input className={styles.input} placeholder="Enter Organization Website Address" type="text" id="department" name="name"/>
          <p>Organization Email: </p>
          <input  className={styles.input}  placeholder="Enter Organization Main Email" type="text" id="department" name="name"/>
          <p>Organization Physical Address: </p>
          <input  className={styles.input}  placeholder="Enter Organization Physical Address" type="text" id="department" name="name"/>
          <p>City: </p>
          <input className={styles.input} placeholder="Enter Organization City Name" type="text" id="department" name="name"/>
          <div className={styles.gridParent}>
            
        
            <div>
                <p>State: </p>
            <select className={styles.shortInput} name="states" id = "states">
              <option value="MD"> MD</option>
            </select>
            </div>
            <div>
            <p>ZipCode: </p>
          <input  className={styles.shortInput}  placeholder="Enter Organization zipcode" type="text" id="department" name="name"/>


            </div>
        
          
          </div>
          
         
          <p>Organization Phone (TTY/TDD): </p>
          <input  className={styles.input}  placeholder="Enter Hearing Impaired Line" type="text" id="department" name="name"/>

        </div>

        <div className={styles.rightSide}>
        <p>Organization Name of ED/CEO: </p>
          <input className={styles.input} placeholder="Enter Organization Name of ED/CEO" type="text" id="department" name="name"/>
          <div className={styles.gridParent}>
            
        
            <div>
                <p>ED/CEO Phone: </p>
                <input  className={styles.shortInput}  placeholder="Enter ED/CEO's number" type="text" id="department" name="name"/>
            </div>
            <div>
            <p>ED/CEO Email: </p>
          <input  className={styles.shortInput}  placeholder="Enter ED/CEO's email" type="text" id="department" name="name"/>
          </div>
          </div>
          
          <div>
            <p>Office Hours:</p>
          </div>


            <div className={styles.radioGroup}>
           
  
                <input type="radio" id="Monday" name="officeHour" value="Monday"/> 
                <label htmlFor="Tuesday"><strong className={styles.radioLabel}>Mon</strong> </label>
       
               <input type="radio" id="Tuesday" name="officeHour" value="Tuesday"/> 
                 <label htmlFor="Tuesday"><strong className={styles.radioLabel}>Tue</strong></label>
                 <input type="radio" id="Wednesday" name="officeHour" value="Wednesday"/> 
                 <label htmlFor="Wednesday"><strong className={styles.radioLabel}>Wed</strong></label>
                 <input type="radio" id="Thursday" name="officeHour" value="Thursday"/> 
                 <label htmlFor="Thursday"><strong className={styles.radioLabel}>Thur</strong></label>
                 <input type="radio" id="Friday" name="officeHour" value="Friday"/> 
                 <label htmlFor="Friday"><strong className={styles.radioLabel}>Fri</strong></label>
                 <input type="radio" id="Saturday" name="officeHour" value="Saturday"/> 
                 <label htmlFor="Saturday"><strong className={styles.radioLabel}>Sat</strong></label>
                 <input type="radio" id="Sunday" name="officeHour" value="Sunday"/> 
                 <label htmlFor="Sunday"><strong className={styles.radioLabel}>Sun</strong></label>
       



            
        
          
          </div>
          
         
       

          <p>Relationship Notes: </p>
          <input className={styles.input} placeholder="Enter Notes on Partners" type="text" id="department" name="name"/>

           
           <div className={styles.buttonArea}>
           <button className={styles.button} type="button">Confirm </button>
          

           </div>
            
          

        

        </div>
        
         
        </div>
    )




}

export default AddNewResourcePageThree;