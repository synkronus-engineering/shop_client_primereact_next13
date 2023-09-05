/* eslint-disable @next/next/no-img-element */
import { isNil } from 'lodash';
import { Avatar } from 'primereact/avatar';

type AvatarAppProps = {
  label?: string;
  clickHandler?: (e: any) => void;
};

const AvatarIcon = ({ label, clickHandler }: AvatarAppProps) => {
  return (
    <Avatar
      label={label || 'U'}
      size="large"
      style={{
        color: '#2196F3',
        cursor: 'pointer',
        borderRadius: '50%',
        alignSelf: 'center',
      }}
      shape="circle"
      onClick={clickHandler}
    />
  );
};

const AvatarProCmp = ({ url_avatar }: { url_avatar: string }) => {
  const pro_avatar = isNil(url_avatar) || url_avatar?.length == 0 ? `/assets/avatar/default_avatar.svg` : url_avatar;
  return <img src={pro_avatar} alt="vatar" className="w-3rem h-3rem border-circle shadow-4 mr-3" />;
};

export { AvatarIcon, AvatarProCmp };
