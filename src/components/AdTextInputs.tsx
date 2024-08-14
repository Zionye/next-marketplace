import { categories } from '@/libs/helpers'
import React from 'react'

const AdTextInputs = () => {
  return (
    <>
      <label htmlFor="titleIn">Title</label>
      <input name='title' id='titleIn' type="text" placeholder='Title'/>

      <label htmlFor="priceIn">Price</label>
      <input name='price' id='priceIn' type="number" placeholder='Price'/>

      <label htmlFor="categoryIn">Category</label>
      <select name="category" id="categoryIn">
        <option selected disabled value="">select category</option>
        {categories.map(({key:categoryKey,label:categoryLabel}) => (
          <option key={categoryKey} value={categoryKey}>{categoryLabel}</option>
        ))}
      </select>

      <label htmlFor="descriptionIn">Description</label>
      <textarea name="description" id="descriptionIn" placeholder='description'></textarea>

      <label htmlFor="contactIn">Contact information</label>
      <textarea name="contact" id="contactIn" placeholder='mobile'></textarea>
    </>
  )
}

export default AdTextInputs