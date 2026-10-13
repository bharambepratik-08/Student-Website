import React from 'react'

const SettingNavbar = () => {

    const btnList = [
        {
            name: 'Profile'
        },
        {
            name: "Apperance"
        }
    ];

  return (
    <div className='display displayColumn gap-4 padding-12 settingNavBar'>
      {
        btnList.map((btn) => {
            return (
                <button className='btnOutlineBorder settingNavbarBtn padding-12 borderRadius-16'>{btn.name}</button>
            )
        })
      }
    </div>
  )
}

export default SettingNavbar
