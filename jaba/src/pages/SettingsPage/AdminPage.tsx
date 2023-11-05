import classes from "./AdminPage.module.css";

const UserPage = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.color_container}>
        <div className={classes.content_container}>
          <div className={classes.header}>Settings</div>
          <div className={classes.profile_container}>
            <div className={classes.all_inputs_container}>
              <div className={classes.profile_header_container}>
                <div className={classes.profile_header}>Profile Settings</div>
                <button
                  className={classes.edit_button}
                  onClick={() => {
                    window.open("https://www.google.com", "_blank");
                  }}
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACSCAMAAACZpWO8AAAAaVBMVEX///8AAAD8/PyFhYXIyMjX19ctLS2KiooyMjLa2tqCgoIoKCjExMTMzMwlJSXR0dEgICDv7+83Nzd7e3v19fXn5+deXl6srKwODg5VVVVPT09GRkaYmJiysrJjY2M8PDygoKBra2sYGBi6F+4EAAAEOElEQVR4nO1ca5OiMBCUIKsij0UQdH3t+f9/5JHM8EbBKq+TvU1/2RKpois96elZwMXCwsLCwsLC4v9EtinOxSbTTaPB/rx1JG6FKaQ2J6dCrpsLYbl1GnztddMpEbYZOc5RPydvTYrFm/BInHTXU/CpeLjqg2+CdnGkWKyE+iSI0zHRyCgk1Vb1AVc3pyBqqUZI9da4x3UkWsdYu5OeGl9+9FQjuPpqnBzy0GdU7TsN2nm0Rod48I2gevpCa8d+VMIbfkna5VhOYVR3kO0IJ9KuQDKKyY9opdZDTrTvbsBlYj/yxZUWajM8JZfHcRXe+FFyfLROsTx+QTHiLqI8W3yRgoN9tz+Uh79BjDixcRdJHmjnAVfJ23Id8eeMUu6ux+mKq6XloNOKnNaprR3tuDVkx4XbPqNSO+L02apx8qVvBCP2I190jmY32ne1dtx5EamJu4jfP57l7d7C+eRjxK3ejm6qbYO1I39iRiGA0SDVtiBOdb8j1dYIRsuRym6QsT/FK/UnQqjmRVUXGUdCPn4/qNVaAhg9SLUtCOp3yjdH8srbwX70hFHTW5yPYdJ8PzjV+o9UIwjyiAihWmfKfszI7znmP0TlRxOnuTg/ip/40YARxI+qVPv8LOEC/Whkyh4BdxFEZYeTfqRAa7RD7P7nXaQCqzY20b0d8/yIVUP60YRqSD8KTfWjiTpCMprpR8BUy340kmo7QPrRK13kt/rR9oUugkm1MzJkzciYVLuodz8k1a5nqebiVHsp1WqesjsAevZLfoRMtfP8yLxUa8iUrQDsIgb60bxU68JTrZ2ynzH62X60/aWp1jg/mpfYNEzZ87oIxI+Ws3a/+NWp9iU/Qk7ZJqXal/zIuFRr3pQdQfxo4t4RIwWmWjtlT2LmlA2cRWam2hSfan+oH5mUajmN/M5Ua96UPdMhOdUCp2yDUu3Me0dAPzL23pFBjOgpo8M8P4JM2YuNKqSpJ4yBflRWkrqYkz49CehHJehpp7KWHq8TcsqWuDkVp4enAPORgrzanbQbd0rklK2gSmnlP9EOmGoJZ3m9gJ15zAlc5F5TkK4kZ+jVuHbIKZuxl48+5vIh1XQ0LwFTbYXgXumV+SP+BEy1NQp5SXrpQZB2blPjyHtHzUXl0hz4kqKvHXDKbpDsZKXUBFcd7dB+RNjLi/6pP4q2P8H9iHCRV229X5CldW8BptoOVFbqPKfO2mXAe0ddyKy067YRWqcT3o8IqpR6d/+4nvB+RCh6pVRuQS9wqzfKsH7EkJvq3hSwV7jH5n0yZKetod6BUG9hiCQprtuD0wIq1Xahhtx0sV9e0rXTRZSDHZIRqL2Vnu49PqdzuNH03u/Z6eN+up61CMZovWpA1eMXgc4XtUtkLTqf18s+mfjHCQAxG2LuXvT/AgFBtrPjOfB0//pAC+7Ky/RrZWFhYWFhYYHCX4/UK8zLjUAmAAAAAElFTkSuQmCC"
                    alt="bruh"
                    className="pencil_img"
                  />
                </button>
              </div>
              <div className={classes.input_container}>
                <div className={classes.input_header}>Full Name</div>
                <input type="text" className="name_input" value="John Adams" />
              </div>
              <div className={classes.input_container}>
                <div className={classes.input_header}>Email</div>
                <input
                  type="email"
                  className="email_input"
                  value="john.adams@org.com"
                />
              </div>
              <div className={classes.input_container}>
                <div className={classes.input_header}>Phone</div>
                <input type="tel" className="tel_input" value="202-123-4567" />
              </div>
              <div className={classes.input_container}>
                <div className={classes.input_header}>Residential Address</div>
                <input
                  type="text"
                  className="res_input"
                  value="123 House Rd, City, State, Zip"
                />
              </div>
              <div className={classes.input_container}>
                <div className={classes.input_header}>
                  Position at Organization
                </div>
                <input
                  type="text"
                  className="pos_input"
                  value="Assistant Manager"
                />
              </div>
            </div>
            <div className="dashboard_container">
              <div className="dashboard_header">Dashboard Settings</div>
              <button
                className={classes.edit_cat_button}
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}
              >
                Edit Category
              </button>
              <div className={classes.dashboard_info}>
                Edit the category options for the dashboard
              </div>
            </div>
          </div>
          <button
            className={classes.reset_button}
            onClick={() => {
              window.open("https://www.google.com", "_blank");
            }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
