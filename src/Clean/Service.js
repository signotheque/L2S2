/* @flow */
/* $FlowFixMe */
import 'imports?this=>window&define=>false!../../primusClient';
import axios from 'axios';
import moment from 'moment';

function convertTalk(talk: RawTalk): Talk {
  return {
    id: talk.id,
    guid: talk.guid,
    start: talk.start,
    room: talk.room,
    slug: talk.slug,
    title: talk.title,
    language: talk.language,
    /* eslint-disable camelcase */
    do_not_record: talk.do_not_record,
    /* eslint-enable camelcase */
    persons: talk.persons,
    date: moment(talk.date),
    duration: moment.duration(talk.duration),
  };
}

/* $FlowFixMe */
const config = require(CONFIGPATH).default;
export const primus = global.Primus.connect(config.primusLocation);

export async function joinReadRoom(roomId: string): Promise {
  primus.emit('join', roomId);
  const joinInformation = await axios.get(`/api/rooms/${roomId}/joinRead`);
  return joinInformation.data.lines;
}

export function leaveReadRoom(roomId: string) {
  primus.emit('leave', roomId);
}

export async function nextTalk(roomId: string): Promise<Talk> {
  const talk: RawTalk = (await axios.get(`/api/nextTalk/${roomId}`)).data;
  return convertTalk(talk);
}
