import React from 'react'

const AdTextInputs = () => {
  return (
    <>
      <label htmlFor="titleIn">Title</label>
      <input id='titleIn' type="text" placeholder='Title'/>

      <label htmlFor="priceIn">Price</label>
      <input id='priceIn' type="number" placeholder='Price'/>

      <label htmlFor="categoryIn">Category</label>
      <select name="" id="categoryIn">
        <option selected disabled value="">select category</option>
        <option value="">Cart</option>
        <option value="">Electronics</option>
        <option value="">Properties</option>
      </select>

      <label htmlFor="descriptionIn">Description</label>
      <textarea name="" id="descriptionIn" placeholder='description'></textarea>

      <label htmlFor="mobileIn">Mobile</label>
      <textarea name="" id="mobileIn" placeholder='mobile'></textarea>
    </>
  )
}

export default AdTextInputs