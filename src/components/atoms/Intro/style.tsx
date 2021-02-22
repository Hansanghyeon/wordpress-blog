import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export const CursorSpan = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
  font-family: NotoSansKR;
`;

export const SloganWrap = styled.div`
  padding-bottom: 300px;
`;

export const Slogan = styled.span`
  font-family: 'Nanum Brush Script', cursive;
  font-size: 72px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const IntroWrap = styled.div`
  position: relative;
`;

export const MotionImgWrap = styled.div`
  width: 375px;
  height: 375px;
  border-radius: 6px;
  right: 0;
  top: 100px;
  position: absolute;
  overflow: hidden;
  &:hover {
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUTSURBVHgBpVhJSyRZEI5caumyq6Zc2p4ZXEHGZVwYcARHBMGL4MGzJ8GTB/+BqAcPevCm4E1E0LuI4oKI6CiKy0kPao8iyAxt25ba1pbbRFZnlpGvMssq+kGQma/ei/je9yLixSsOsm8ceXKkX3N4ZqU0G+O8IRzzm2YjKvktbRPh7WauXDAA0CfHAFEZUQwxf09rJBMAggHaXV9f72toaAi2t7d/xBYQBMGrD1YUJXZ3dxdaX1//vL+//3B+fh7GbglFJoBMpjIGwpFVu3SpqqoKjo6O/lZXV1deWlqaL4qiYCg36U9smSzL6tXV1f3e3t6n2dnZfzY2Nr5if5wAUu3AcGlAiAaIdwMDA+X9/f1NhYWFfp7nY4ZSlVHKEwb1ueLt7e3T9PT08dDQ0Cf8jhKGUsAIb4DImZub+6Ovr68pGAwCx3FhY3XmCintMnnqBqVAIOBtamoqLysr4xYXFx8gjb9wzDtngHCj+JaWlpo7OjoqkIWIYdzcZ3NFmo0+DqzR5VFV1beysnLR2dm5h99hspCkDsqIOTGxHWNjY9U9PT2/I4hvDK10rykwhXkmIweZlJGVD3l5eerq6upXsDquLRAdhAeR/4pA/vR6vVEDBN0CyoYKzvnDAhKjS6upqfn59PT0ixFRFh+jSUnfEk9+fv5PuJ9/NTc35xo0SozibBqNPl2/7+joKNTY2Pg3vj+hmI6v8YSNhJN2d3cX1NbWBvD9xRgoGaLYCJu4aD91YlNHpLq6Otjb2/vBYN+0CzyD3N3S0vLR7/frk2lkyJC696oNINqvMkB0fTGfzyd1dXX9QoAknDv5otOHzuSprKwMMEzIzGplB3beGmMCipSUlPh1W/B6XFgZqaioeIfe7XZgw8kQO85pvClSUVGRq7i4+B28BgsnEkb4nJwcFwrYbEcmTYPUTE37TEfnMNF5kBEXsc2JhBEOQ4x3u90UPU3F2UYM28wFcWhDD2fqFtYyAE9QNR6Py/pAsDqi0+HIskDBsnPMb163EYlELEzzRIH2/PwsPz090bzhFJ52YZqSUZ0kHA7Lui0gSZAnH+rl5WXs5uZGgtQwdBIlgzGsaBcXF3G0EyO2LYyooVAojpkvQvvA6vFJzwfnyLETChaOj4/DaCsG5DS2MIISX15efnx5eeHAWvq9tSWZSAIE6obNzc1HeD06VJaRxAQ8rkNra2v6II4BmQ6U7akL1kMy4fS7u7vywsLCI2Eq6SNAJkvRaDQ8MTERenh4sGxbGuNOSc/iFzoIrGmF8fHxkG4DmPRAy4Bkcrm+vpbRs9+3tbUJLpdLZlasMQY0B+aSAAzm3VhyyvPz8//B99IiTnTaloqJ58HBgYTZ7z0e2YDJR4H0NQib+CgAXpIk99TUlGt4ePhf+F5axAiLYAeENnVra0tBJf7W1lYWTDoQlF0emfUgAGFkZOQzJkyzBjHLCs0JCM2MGk5Utre3YycnJz68Rrhyc3M1vdIiK2YzaRIAZk/x7OzMi4U3zMzM3KGqbwwIS2Z1YoSuUMXSLoqFtIgO7NE0TcRrBeAxoEFqsSzoAHZ2dryTk5Pi4OBg9PDw8Av2RwgImQVhrsKu0SumyxC9PPAWFBR48bbnxUuWiAJY6AA6NGDK1jAqAH1LwQwdv7+/Nyu8OLzWNo4lZ7ZXTlbMehTgNQvTmuSHr5zsGJ5ItpdwS7WezkimzQREfQLg7b8lMqpjsgFC57D/jQABQ0Fl3P4HOE40fsIFx2UAAAAASUVORK5CYII=')
        17 17,
      auto;
  }
  > div {
    position: absolute;
    height: 100%;
    width: 100%;
    will-change: transform;
    > div {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-size: cover;
      background-position: center;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export const CatButtonWrap = styled.div`
  display: flex;
  svg {
    width: 48px;
    height: 48px;
  }
  .cpu {
    .pointColor {
      fill: #00b871;
    }
    .bg {
      fill: ${({ theme }) => theme.colors.bg[0]};
    }
    .body {
      fill: ${({ theme }) => theme.colors.grayscalesLight[1]};
      fill: ${({ theme }) => theme.colors.bg[1]};
    }
    .bodyShadow {
      fill: ${({ theme }) => theme.colors.grayscalesLight[2]};
      fill: ${({ theme }) => theme.colors.bg[0]};
    }
  }
`;
