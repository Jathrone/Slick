import * as channelsApiUtil from "../util/channels_api_util";


export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS"

const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const fetchRelevantChannels = (workspaceId) => (dispatch) => (
    channelsApiUtil.fetchRelevantChannels(workspaceId)
        .then(res => {dispatch(receiveChannels(res))})
)

