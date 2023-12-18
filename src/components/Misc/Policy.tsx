import React from "react";
import PolicyCard from "../Cards/PolicyCard";

const Policy = () => {
  return (
    <div className="policy inner-container-90w">
      <div>
        <PolicyCard
          title="Контрола на квалитет"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          icon="box-tick"
        />
        <PolicyCard
          title="Политика на враќање"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          icon="return-box"
        />
      </div>
      <div>
        <PolicyCard
          title="Достава"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          icon="delivery-truck"
        />
        <PolicyCard
          title="Помош"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          icon="chat-help" //!!FIX BLACK BACKGROUND OF ICON
        />
      </div>
    </div>
  );
};

export default Policy;
