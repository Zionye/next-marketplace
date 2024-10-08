import {useRef} from 'react';
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { categories } from "@/libs/helpers";
import LabelRadioButton from "@/components/LabelRadioButton";
import SubmitButton from "@/components/SubmitButton";

type Props = {
  action: (data: FormData) => void;
};

const SearchForm = ({action}: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form 
      ref={formRef}
      action={action} 
      className="bg-white grow w-1/4 p-4 border-r flex flex-col gap-4">
        <input name="phrase" type="text" placeholder="Search Marketplace" />

        <div className="flex flex-col gap-0">
          <LabelRadioButton
              name="category" 
              value={''}
              icon={faStore} 
              onClick={()=>formRef.current?.requestSubmit()}
              label={'All categories'}
              defaultChecked={true}/>

          {categories.map(({key:categoryKey,label:categoryLabel, icon:categoryIcon}) => (
            <LabelRadioButton 
              key={'categoryKey'}
              name="category" 
              value={categoryKey} 
              icon={categoryIcon} 
              onClick={()=>formRef.current?.requestSubmit()}
              label={categoryLabel}/>
          ))}
        </div>

        <div>
          <label>filter by price</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input name="min" type="number" placeholder="min"/>
            </div>
            <div>
              <input name="max" type="number" placeholder="max"/>
            </div>
          </div>
        </div>

        <SubmitButton>Search</SubmitButton>
    </form>
  )
}

export default SearchForm;