import request from "@/utils/cameraRequest";

export function userLogin() {
  return request({
    url: '/seawall/video/userLogin',
    method: 'post',
  })
}

export function refreshToken() {
  return request({
    url: '/seawall/video/keep',
    method: 'post',
  })
}

/**
 * @returns {groupId,parentID,groupName}
 */
export function groupList() {
  return request({
    url: '/seawall/video/groupList',
    method: 'post',
  })
}

/**
 * @param data {groupId： xxxx}
 * @returns {puId,chId,mpId,mpName,gId,status,isC,fCode,lng,lat}
 */
export function mpList(data) {
  return request({
    url: '/seawall/video/mpList',
    method: 'post',
    data: data
  })
}

/**
 * @param data {mpId,fCode,rAddress,rPort}
 * @returns {sMod,sAddress,sPort,taskId}
 */
export function videoStart(data) {
  return request({
    url: '/seawall/video/videoStart',
    method: 'post',
    data: data
  })
}

/**
 * @param data {mpId,taskId}
 */
export function videoStop(data) {
  return request({
    url: '/seawall/video/videoStop',
    method: 'post',
    data: data
  })
}

/**
 * @param data {{mpId: *}}
 * @returns {url}
 */
export function videoConnect(data) {
  return request({
    url: '/seawall/video/videoConnect',
    method: 'post',
    data: data
  })
}

/**
 * @param data {mpId,beginTime,endTime}
 * @returns {beginTime,endTime,fileName}
 */
export function replayFileList(data) {
  return request({
    url: '/seawall/video/replayFileList',
    method: 'post',
    data: data
  })
}

/**
 * @param data {mpId,fileName,beginTime,endTime,videoType,range,speed,rAddress,rPort}
 * @returns {sMod,sAddress,sPort,taskId}
 */
export function replayStart(data) {
  return request({
    url: '/seawall/video/replayStart',
    method: 'post',
    data: data
  })
}

/**
 * @param data {mpId,taskId}
 */
export function replayStop(data) {
  return request({
    url: '/seawall/video/replayStop',
    method: 'post',
    data: data
  })
}

/**
 * @param data {mpId,action,para}
 */
export function ptzControl(data) {
  return request({
    url: '/seawall/video/ptzControl',
    method: 'post',
    data: data
  })
}

export function selectSectionVal (data) {
  return request({
    url: '/seawall/inter/selectSectionVal',
    method: 'post',
    data: data
  })
}

export function selectEquipList (data) {
  return request({
    url: '/seawall/inter/selectEquipList',
    method: 'post',
    data: data
  })
}

export function selectStaValue (data) {
  return request({
    url: '/seawall/inter/selectStaValue',
    method: 'post',
    data: data
  })
}

export function selectEquStatistics (data) {
  return request({
    url: '/seawall/inter/selectEquStatistics',
    method: 'post',
    data: data
  })
}

export function selectEquEmergency (data) {
  return request({
    url: '/seawall/inter/selectEquEmergency',
    method: 'post',
    data: data
  })
}

export function selectStationList () {
  return request({
    url: '/seawall/inter/selectStationList',
    method: 'post',
  })
}

export function selectEventTotal () {
  return request({
    url: '/seawall/inter/selectEventTotal',
    method: 'post',
  })
}


export function selectClassify (type) {
  return request({
    url: '/seawall/inter/selectClassify?type=' + type,
    method: 'post',
  })
}

export function selectEventTrend () {
  return request({
    url: '/seawall/inter/selectEventTrend',
    method: 'post',
  })
}

export function selectEventByCondition (data) {
  return request({
    url: '/seawall/inter/selectEventByCondition',
    method: 'post',
    data: data
  })
}


export function selectEventAnalyse () {
  return request({
    url: '/seawall/inter/selectEventAnalyse',
    method: 'post',
  })
}

export function dictType (dictType) {
  return request({
    url: '/seawall/inter/dictType?dictType=' + dictType,
    method: 'post',
  })
}

export function groupListNew (data) {
  return request({
    url: '/seawall/video/groupListNew',
    method: 'post',
    data: data
  })
}

export const selectFraction = () => {
  return request({
    url: '/seawall/safe/selectFraction',
    method: 'post',
  })
}
export const selectRiskTrend = () => {
  return request({
    url: '/seawall/safe/selectRiskTrend',
    method: 'post',
  })
}
