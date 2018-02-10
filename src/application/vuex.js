import { vuex as common } from './common';
import { vuex as me } from './me';
import { vuex as tenant } from './tenant';
import { vuex as prisonArea } from './prison-area';
import { vuex as prisonHouse } from './prison-house';
import { vuex as prisonCriminal } from './prison-criminal';
import { vuex as role } from './role';
import { vuex as user } from './user';
import { vuex as court } from './court';
import { vuex as policeStation } from './police-station';
import { vuex as procuratorate } from './procuratorate';
import { vuex as prisonDepartment } from './prison-department';
import { vuex as prison } from './prison';
import { vuex as prisonBureau } from './prison-bureau';
import { vuex as prisonBureauDepartment } from './prison-bureau-department';
import { vuex as log } from './log';
import { vuex as prisonBureauCriminal } from './prison-bureau-criminal';

export default {
  common,
  me,
  tenant,
  user,
  role,
  log,
  court,
  policeStation,
  prison,
  prisonArea,
  prisonHouse,
  prisonCriminal,
  prisonDepartment,
  procuratorate,
  prisonBureau,
  prisonBureauDepartment,
  prisonBureauCriminal
};
