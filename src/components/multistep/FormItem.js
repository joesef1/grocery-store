import { useState } from "react";

export const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

  switch (item.type) {
    case 'text':
      return (
        <>
          <label className="block mb-2">{item.label}</label>
          <input
            type="text"
            id={item.label}
            className="border rounded-md px-3 py-2 w-full"
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      )
    case 'password':
      return (
        <>
          <label className="block mb-2" htmlFor="inputPassword5">{item.label}</label>
          <input
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className="border rounded-md px-3 py-2 w-full"
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </>
      )
    case 'information':
      return (
        <p>
          {item.label}
        </p>
      )
    case 'select':
      return (
        <div className="mt-2">
          <select aria-label={item.label} onChange={(e) => onChange(e.target.value, item.value)} className="border rounded-md px-3 py-2 w-full">
            <option>{item.label}</option>
            {
              item.options.map((opt, index) => {
                return (
                  <option value={opt} key={index}>{opt}</option>
                )
              })
            }
          </select>
        </div>
      )

    default:
      return (
        <></>
      )
  }
};
