#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec2 mouse = u_mouse.xy / u_resolution;
  vec3 destinationColor = vec3(1.0, 0.0, 1.0);
  float timeVector = abs(sin(u_time * 0.5));

  float positionVector = 0.5;
  positionVector = st.y * 0.25 * sin(st.x * 3.14);

  gl_FragColor = vec4(
    1.0 - (destinationColor.x * timeVector * positionVector),
    1.0 - (destinationColor.y * timeVector * positionVector),
    1.0,// - (destinationColor.z * timeVector * positionVector),
    1.0
  );
}