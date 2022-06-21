import Image from 'next/image';

import { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";

import Box from "components/UI/Box";
import Typography from "components/UI/Typography";

export type DropzoneFieldProps = {
  accept: 'png' | 'jpeg';
  title: string;
}

type FileWithPreview = File & { preview: string };

const DropzoneField = ({ accept, title } : DropzoneFieldProps) => {
  const [files, setFiles] = useState<Array<FileWithPreview>>([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      [`image/${accept}`]: []
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);


  return (
    <Box className="dropzone-container">
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Typography tag="p">
          {title}
        </Typography>
      </Box>
      <aside className="dropzone-preview">
        {files.map((file) => (
          <Box>
            <Image
              key={file.name}
              width={128}
              height={128}
              src={file.preview}
              onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
            <Box className="details">
              {file.name} - {(file.size / 1024000).toFixed(2)}MB
            </Box>
          </Box>
        ))}
      </aside>
    </Box>
  );
}
export default DropzoneField;
