
    let myForm = document.querySelector("form");
    let tbody = document.querySelector("tbody");

    let doctorRecords = [];
    myForm.addEventListener("submit",(event)=>{
      event.preventDefault();

      let record={
        name : myForm.name.value,
        docId:myForm.doctor_id.value,
        specialization : myForm.specialization.value,
        experience : myForm.experience.value,
        email : myForm.email.value,
        mobileNo : myForm.mobile.value
      };
      // console.log(record);
      doctorRecords.push(record);
      // console.log(doctorRecords);
      myForm.reset();

      tbody.innerHTML=null;
      doctorRecords.map((element, index)=>{
        let row = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdDocId = document.createElement("td");
        let tdSpecialization = document.createElement("td");
        let tdExperience = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdMobileNo = document.createElement("td");
        let tdRole = document.createElement("td");
        let DeleteBtn = document.createElement("button");


        tdName.innerText=element.name;
        tdDocId.innerText=element.docId;
        tdSpecialization.innerText=element.specialization;
        tdExperience.innerText=element.experience;
        tdEmail.innerText=element.email;
        tdMobileNo.innerText = element.mobileNo;
        DeleteBtn.innerText="Delete";
        DeleteBtn.style.backgroundColor="red";

        if(element.experience>5){
          tdRole.innerText="Senior";
        }
        else if(element.experience>=2 && element.experience<5){
          tdRole.innerText="Junior";
        }
        else if(element.experience<=1){
          tdRole.innerText="Trainee";
        }

          DeleteBtn.addEventListener("click", () => {
              let removingIndex = doctorRecords.findIndex((element) => {
                  if (record.docId == element.docId) {
                      return true;
                  }
                  else {
                      return false;
                  }
              });

              if (removingIndex != -1) {
                  doctorRecords.splice(index, 1);
              }
              row.remove();
              // console.log(removingIndex);
          });

          
          
          row.append(tdName,tdDocId,tdSpecialization,tdExperience,tdEmail,tdMobileNo,tdRole,DeleteBtn);
          tbody.append(row);
        });
        

    });
let selectFilter = document.getElementById("filter");
selectFilter.addEventListener("change", () => {
    let filteredArr = doctorRecords.filter((element, index) => {
        if (element.specialization == selectFilter.value) {
            return true;
        }
        else {
            return false;
        }
    });

    filteredArr.map((element, index) => {
        let row = document.createElement("tr");
        let tdName = document.createElement("td");
        let tdDocId = document.createElement("td");
        let tdSpecialization = document.createElement("td");
        let tdExperience = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdMobileNo = document.createElement("td");
        let tdRole = document.createElement("td");
        let DeleteBtn = document.createElement("button");


        tdName.innerText = element.name;
        tdDocId.innerText = element.docId;
        tdSpecialization.innerText = element.specialization;
        tdExperience.innerText = element.experience;
        tdEmail.innerText = element.email;
        tdMobileNo.innerText = element.mobileNo;
        DeleteBtn.innerText = "Delete";
        DeleteBtn.style.backgroundColor = "red";

        if (element.experience > 5) {
            tdRole.innerText = "Senior";
        }
        else if (element.experience >= 2 && element.experience < 5) {
            tdRole.innerText = "Junior";
        }
        else if (element.experience <= 1) {
            tdRole.innerText = "Trainee";
        }

        DeleteBtn.addEventListener("click", () => {
            let removingIndex = doctorRecords.findIndex((element) => {
                if (record.docId == element.docId) {
                    return true;
                }
                else {
                    return false;
                }
            });

            if (removingIndex != -1) {
                doctorRecords.splice(index, 1);
            }
            row.remove();
            // console.log(removingIndex);
        });



        row.append(tdName, tdDocId, tdSpecialization, tdExperience, tdEmail, tdMobileNo, tdRole, DeleteBtn);
        tbody.append(row);

    })
    });
    