import styles from "./AddNewResourcePageTwo.module.css"


const AddNewResourcePageTwo = ()  => {

    return (
        <div className={styles.page}>
        
        <div className={styles.leftSide}>
        <h2 className={styles.title}>Add New Resource</h2>
        <div className={styles.gridParent}>
          <div>
          <p>Main Contact Name: </p>
        
        <input className={styles.shortInput}  placeholder="Enter Organization Name" type="text" id="name" name="name"/>

          </div>
          <div>
          <p>Main Contact Phone: </p>
        <input className={styles.shortInput} placeholder="Enter Organization Name" type="text" id="phone" name="name"/>


          </div>
       
 
        
        </div>
         
          <p>Main Contact Department: </p>
          <input className={styles.input} placeholder="Enter Organization Address" type="text" id="department" name="name"/>
          <p>Main Contact Email: </p>
          <input  className={styles.input}  placeholder="Enter Organization City" type="text" id="department" name="name"/>
          <div className={styles.gridParent}>
            <div>
            <p>Second Main Contact Name: </p>
          <input  className={styles.shortInput}  placeholder="Enter Organization 2nd main contact name" type="text" id="department" name="name"/>

            </div>
            <div>
            <p>Second Main Contact Phone: </p>
          <input  className={styles.shortInput}  placeholder="Enter Organization 2nd main contact phone" type="text" id="department" name="name"/>


            </div>
        
          
          </div>
          
          <p>Second Main Contact Department: </p>
          <input className={styles.input} placeholder="Enter Organization 2nd main contact department " type="text" id="department" name="name"/>
          <p>Second Main Contact Email: </p>
          <input  className={styles.input}  placeholder="Enter Organization 2nd main contact email" type="text" id="department" name="name"/>

        </div>

        <div className={styles.rightSide}>
            <p>Notes: </p>
            <input className={styles.largeText} type="text" id="Notes" name="Notes" placeholder="Enter Additional Notes"/>
            <p>Application: </p>
            <input className={styles.largeText} type="text" id="Notes" name="Notes" placeholder="Enter Information"/>
            <p>Eligibility Notes: </p>
            <input className={styles.largeText} type="text" id="Notes" name="Notes" placeholder="Enter Information"/>

           <div className={styles.buttonArea}>
           <button className={styles.button} type="button">Confirm </button>
          

           </div>
            
          

        

        </div>
         
        </div>
    )




}

export default AddNewResourcePageTwo;