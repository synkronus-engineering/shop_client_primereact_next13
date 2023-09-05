import { Session } from '@supabase/supabase-js';
import { ActionSecureModes, secureLocalStore } from 'lib/storage';
import { has } from 'lodash';
import { DefaultValue, atom } from 'recoil';

type MaybeSession = Session | null;

const userGlobalSession = atom<MaybeSession>({
  key: 'userGlobalSessionAtom',
  default: null as MaybeSession,
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      const initUsrSsn = secureLocalStore('usr_rcl_ssn', null, ActionSecureModes.GET) as any;
      if (has(initUsrSsn, 'user')) setSelf(initUsrSsn as MaybeSession);
      else setSelf(new DefaultValue());
      onSet((newSsn) => secureLocalStore('usr_rcl_ssn', newSsn, ActionSecureModes.SET));
    },
  ],
});

export { userGlobalSession };
