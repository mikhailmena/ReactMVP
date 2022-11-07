import React, {useEffect} from "react";

function LinkedIn(){
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://platform.linkedin.com/badges/js/profile.js" 
        script.async = true;
      
        document.body.appendChild(script);


      }, []);
          return (
    <div class="badge-base LI-profile-badge"
    data-locale="en_US" data-size="medium"
     data-theme="light" data-type="HORIZONTAL" 
     data-vanity="marc-m-menard" data-version="v1">
      <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/marc-m-menard?trk=profile-badge">Marc Menard</a>
      </div>
    )

   
}
export default LinkedIn;