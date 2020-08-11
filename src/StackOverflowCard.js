const { imgToDataURL } = require('./utils');

const StackOverflowCard = async (data, theme, layout) => {
  const thumbnailBase64 = await imgToDataURL(data.profile_image);
  const namePosition = (210 - (data.display_name.length * 8.5)) / 2;
  const isDark = theme === 'dark';

  if (layout === 'compact') {
    return `
      <svg width="191" height="70" viewBox="0 0 191 70" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <rect stroke="${isDark ? '#4A4E51' : '#eff0f1'}" fill="${isDark ? '#2D2D2D' : '#fff'}" x=".5" y=".5" width="190" height="69" rx="5" />
          <text font-family="Arial-BoldMT, Arial" font-size="15" font-weight="bold" fill="${isDark ? '#F2F2F3' : '#0f0f0f'}">
            <tspan x="12" y="23">${data.display_name}</tspan>
          </text>
          <text font-family="Arial-BoldMT, Arial" font-size="12" fill="${isDark ? '#F2F2F3' : '#0f0f0f'}">
            <tspan x="13" y="41">${data.reputation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</tspan>
          </text>
          <g transform="translate(13 48)" fill="#F1B600">
            <circle cx="3.5" cy="7.5" r="3.5" />
            <text font-family="Arial-BoldMT, Arial" font-size="12">
              <tspan x="9" y="11">${data.badge_counts.gold}</tspan>
            </text>
          </g>
          <g transform="translate(38 48)" fill="#9A9B9E">
            <circle cx="3.5" cy="7.5" r="3.5" />
            <text font-family="Arial-BoldMT, Arial" font-size="12">
              <tspan x="9" y="11">${data.badge_counts.silver}</tspan>
            </text>
          </g>
          <g transform="translate(73 48)" fill="#AB825F">
            <circle cx="3.5" cy="7.5" r="3.5" />
            <text font-family="Arial-BoldMT, Arial" font-size="12">
              <tspan x="9" y="11">${data.badge_counts.bronze}</tspan>
            </text>
          </g>
        </g>
      </svg>
    `;
  }

  return `
    <svg width="210" height="312" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path
        d="M5 0h200a5 5 0 015 5v302a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5m1 2h198a4 4 0 014 4v300a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4"
        fill="${isDark ? '#4A4E51' : '#eff0f1'}" fill-rule="nonzero" />
      <path d="M5 1h200a4 4 0 014 4v302a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4" fill="${isDark ? '#2D2D2D' : '#fff'}" fill-rule="nonzero" />
      <path
        d="M1 1h208v100H1V1m4 24h200c2.209 0 4 .439 4 .98v74.04c0 .54-1.791.98-4 .98H5c-2.21 0-4-.44-4-.98V25.98c0-.54 1.79-.98 4-.98"
        fill="${isDark ? '#3D3D3D' : '#eff0f1'}" fill-rule="nonzero" />
      <g transform="translate(40 31)" stroke-linecap="square">
        <image width="130" height="130" xlink:href="${thumbnailBase64}" />
        <use stroke="#000" xlink:href="#a" />
      </g>
      <text transform="translate(${namePosition} 171)" stroke-linecap="square" stroke-linejoin="bevel" fill="${isDark ? '#F2F2F3' : '#0f0f0f'}"
        font-family="Arial-BoldMT, Arial" font-size="15" font-weight="bold">
        <tspan x=".5" y="14">${data.display_name}</tspan>
      </text>
      <text transform="translate(48 231)" stroke-linecap="square" stroke-linejoin="bevel" fill="${isDark ? '#F2F2F3' : '#0f0f0f'}"
        font-family="ArialMT, Arial" font-size="16">
        <tspan x="${-data.reputation.toString().length * 2}" y="14">${data.reputation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</tspan>
      </text>
      <text transform="translate(88 231)" stroke-linecap="square" stroke-linejoin="bevel" fill="#ACB2B8"
        font-family="ArialMT, Arial" font-size="12">
        <tspan x="${data.reputation.toString().length > 4 ? data.reputation.toString().length * 2 : .5}" y="12.5">REPUTATION</tspan>
      </text>
      <path
        d="M21 266h49a3 3 0 013 3v22a3 3 0 01-3 3H21a3 3 0 01-3-3v-22a3 3 0 013-3m1 2h47a2 2 0 012 2v20a2 2 0 01-2 2H22a2 2 0 01-2-2v-20a2 2 0 012-2"
        fill="#F1B600" fill-rule="nonzero" />
      <path d="M21 267h49a2 2 0 012 2v22a2 2 0 01-2 2H21a2 2 0 01-2-2v-22a2 2 0 012-2" fill="${isDark ? '#5E553C' : '#fff4d1'}"
        fill-rule="nonzero" />
      <text transform="translate(42 274)" stroke-linecap="square" stroke-linejoin="bevel"
        fill="${isDark ? '#CFD2D6' : '#3c4146'}" font-family="ArialMT, Arial" font-size="11">
        <tspan x="0" y="10">${data.badge_counts.gold}</tspan>
      </text>
      <path d="M29 277a3 3 0 110 6 3 3 0 010-6" fill="#F1B600" fill-rule="nonzero" />
      <path
        d="M80 266h50a3 3 0 013 3v22a3 3 0 01-3 3H80a3 3 0 01-3-3v-22a3 3 0 013-3m1 2h48a2 2 0 012 2v20a2 2 0 01-2 2H81a2 2 0 01-2-2v-20a2 2 0 012-2"
        fill="#9A9C9F" fill-rule="nonzero" />
      <path d="M80 267h50a2 2 0 012 2v22a2 2 0 01-2 2H80a2 2 0 01-2-2v-22a2 2 0 012-2" fill="${isDark ? '#424242' : '#e8e8e8'}"
        fill-rule="nonzero" />
      <text transform="translate(101 274)" stroke-linecap="square" stroke-linejoin="bevel"
        fill="${isDark ? '#CFD2D6' : '#3c4146'}" font-family="ArialMT, Arial" font-size="11">
        <tspan x="0" y="10">${data.badge_counts.silver}</tspan>
      </text>
      <path d="M88 277a3 3 0 110 6 3 3 0 010-6" fill="#9A9C9F" fill-rule="nonzero" />
      <path
        d="M140 266h49a3 3 0 013 3v22a3 3 0 01-3 3h-49a3 3 0 01-3-3v-22a3 3 0 013-3m1 2h47a2 2 0 012 2v20a2 2 0 01-2 2h-47a2 2 0 01-2-2v-20a2 2 0 012-2"
        fill="#AB825F" fill-rule="nonzero" />
      <path d="M140 267h49a2 2 0 012 2v22a2 2 0 01-2 2h-49a2 2 0 01-2-2v-22a2 2 0 012-2" fill="${isDark ? '#4D433B' : '#f2e9e1'}"
        fill-rule="nonzero" />
      <text transform="translate(161 274)" stroke-linecap="square" stroke-linejoin="bevel"
        fill="${isDark ? '#CFD2D6' : '#3c4146'}" font-family="ArialMT, Arial" font-size="11">
        <tspan x="0" y="10">${data.badge_counts.bronze}</tspan>
      </text>
      <path d="M148 277a3 3 0 110 6 3 3 0 010-6" fill="#AB825F" fill-rule="nonzero" />
    </svg>
  `;
};

module.exports = StackOverflowCard;
