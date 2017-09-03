/*!
 * Dependencies
 */

var _ = require('underscore')
  , links = require('./links.json')

/**
 * Write a New Link
 * 
 * @param {String} link
 * @return {Promise} fulfills if link has been successfully written
 */

function writeLink(link) {
  // TODO 
}

/**
 * Check if link has already been added 
 * 
 * @param {String} link
 * @return {Boolean} true if the link has already been added
 */

function hasLink(link) {
  // TODO 
}

/**
 * Get Link Body
 * 
 * @param {String} link
 * @return {Promise} fulfills if the body is fetched
 */

function getBody(link) {
  // TODO
}

/**
 * Mark a link as having been sent
 * 
 * @param {String} link
 * @return {Promise} fulfills if a link is successfully marked as sent
 */

function markSent(link) {
  // TODO
}

/**
 * Fetch links
 * 
 * @return {Promise} fulfills if links are fetched from AVC
 */

function fetchLinks() {
  // TODO 
}

/**
 * Add new links to the DB that have not already been added
 * 
 * @return {Promise} fulfills if successfully adds new links to the DB 
 */

function updateLinks() {
  // TODO
}

/*!
 * Exports
 */

module.exports = {

}
