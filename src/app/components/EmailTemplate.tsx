import * as React from 'react';

interface EmailTemplateProps {
  title: string;
  formData: Record<string, string>;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  title,
  formData,
}) => (
  <div>
    <h1>{title}</h1>
    <ul>
      {Object.entries(formData).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  </div>
);
