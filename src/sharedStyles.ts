import { css } from 'lit';

export const sharedStyles = css`
[hide] {
  display: none;
}
.jlpt5-color, .jlpt4-color, .jlpt3-color, .jlpt2-color, .jlpt1-color {
  border-radius: 15px;
  padding: 1px 11px;
}
.jlpt5-color {
  background-color: #4caf50 !important;
  color: white !important;
}
.jlpt4-color {
  background-color: #ffeb3b !important;
  color: black !important;
}
.jlpt3-color {
  background-color: #ff9800 !important;
  color: white !important;
}
.jlpt2-color {
  background-color: #f44336 !important;
  color: white !important;
}
.jlpt1-color {
  background-color: black !important;
  color: white !important;
}
`