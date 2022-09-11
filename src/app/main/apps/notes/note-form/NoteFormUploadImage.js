import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function NoteFormUploadImage(props) {
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.readAsBinaryString(file);

    reader.onload = () => {
      if (props.onChange) {
        props.onChange(`data:${file.type};base64,${btoa(reader.result)}`);
      }
    };

    reader.onerror = () => {
      console.log('error on load image');
    };
  }

  return (
    <>
      <label htmlFor="button-file">
        <input
          accept="image/*"
          className="hidden"
          id="button-file"
          type="file"
          onChange={handleChange}
        />
        <IconButton className="w-32 h-32 mx-4 p-0" component="span" size="large">
          <FuseSvgIcon size={20}>heroicons-outline:photograph</FuseSvgIcon>
        </IconButton>
      </label>
    </>
  );
}

export default NoteFormUploadImage;
