import { useState, useRef } from "react";
import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;
  
  const [selectedImage, setSelectedImage] = useState();
  const handleProfilePhotoChange = (field: keyof ResumeProfile, files: File) =>{
    // dispatch()
  } 

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    
    dispatch(changeProfile({ field, value }));
    
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="F.I.O"
          labelClassName="col-span-full"
          name="name"
          placeholder="F.I.O"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Qisqa ma'lumot"
          labelClassName="col-span-full"
          name="summary"
          placeholder="(Tug'ilgan sana, tugilgan joyi, yashash manzili)"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="hello@marketing.uz"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Tel"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(23)456-78-90"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Ijtimoiy tarmoqlar"
          labelClassName="col-span-4"
          name="url"
          placeholder="linkedin.com/in/tstu"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Joylashuv"
          labelClassName="col-span-2"
          name="location"
          placeholder="Toshkent, UZB"
          value={location}
          onChange={handleProfileChange}
        />
       {/* <input
        type="file"
        name="myImage"
        // value={selectedImage}
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
       

      </div>
    </BaseForm>
  );
};
