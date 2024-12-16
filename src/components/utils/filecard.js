import React from 'react';

// filecard.js
export const FileCard = ({ title, description, link, iconUrl }) => {
  const iconSize = 110;
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        margin: '16px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%', // 保持卡片高度一致
      }}
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt="icon"
          style={{
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            marginBottom: '16px',
            backgroundColor: 'white',
          }}
        />
      )}
      <h3 style={{ margin: '0 0 8px', textAlign: 'center' }}>{title}</h3>
      <p style={{ color: '#555', margin: '0 0 8px', textAlign: 'center' }}>{description}</p>
      <div style={{ flexGrow: 1 }}></div> {/* 占用空间，推动按钮到底部 */}
      <a
        href={link}
        target='_blank'
        style={{
          display: 'inline-block',
          marginTop: '8px',
          padding: '8px 16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
          textAlign: 'center',
          marginTop: 'auto',
        }}
      >
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/emoji/48/fire.png"
          alt="fire"
          style={{ verticalAlign: 'middle', marginRight: '2px' }}
        />
        Check It Out!
      </a>
    </div>
  );
};

  export const FileCardContainer = ({ children }) => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          padding: '16px',
        }}
      >
        {children}
      </div>
    );
  };