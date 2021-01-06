import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({children, google, ...otherProps}) => (
     <button className={`${google ? 'google' : ''} custom-button`} {...otherProps}>
          {children}
     </button>
)