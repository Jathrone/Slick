import * as channelsApiUtil from "../util/channels_api_util";


export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const fetchRelevantChannels = (workspaceId) => (dispatch) => (
    channelsApiUtil.fetchRelevantChannels(workspaceId)
        .then(res => {dispatch(receiveChannels(res))})
)

export const createChannel = (name, workspaceId, topic, purpose) => (dispatch) => (
    channelsApiUtil.createChannel(name, workspaceId, topic, purpose)
        .then(res => dispatch(receiveChannel(res)))
)
