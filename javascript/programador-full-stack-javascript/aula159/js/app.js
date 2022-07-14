class app{
    addProperty(){
      event.preventDefault()
      let kind = document.querySelector ("select[name='kind']").value
      let area = document.querySelector ("input[name='area']").value   
      let rented = document.querySelector ("input[name='rented']").value
      let property = new Property (kind, area, rented)
      this.addPropertiesList(property)
      this.cleanForm()       
    }

    addOnPropertiesList(property){
        let listElement = document.createElement("li")
    }

}


