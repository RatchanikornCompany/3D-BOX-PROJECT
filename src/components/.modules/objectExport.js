import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';

const link = document.createElement('a');
link.style.display = 'none';
document.body.appendChild(link);

export const exportGLTF = (input) => {
  const gltfExporter = new GLTFExporter();

  const options = {
    trs: document.getElementById('option_trs').checked,
    onlyVisible: document.getElementById('option_visible').checked,
    truncateDrawRange: document.getElementById('option_drawrange').checked,
    binary: document.getElementById('option_binary').checked,
    maxTextureSize:
      Number(document.getElementById('option_maxsize').value) || Infinity, // To prevent NaN value
  };
  gltfExporter.parse(
    input,
    (result) => {
      if (result instanceof ArrayBuffer) {
        saveArrayBuffer(result, 'scene.glb');
      } else {
        const output = JSON.stringify(result, null, 2);
        // console.log(output);
        saveString(output, 'scene.gltf');
      }
    },
    options
  );
};

const save = (blob, filename) => {
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

const saveString = (text, filename) => {
  save(new Blob([text], { type: 'text/plain' }), filename);
};
