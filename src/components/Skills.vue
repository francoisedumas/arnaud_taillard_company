<template>
  <div class="container card">
    <div class="vertically-centered">
      <h2 class="highlight"><span>Compétences clés</span></h2>
    </div>
    <div class="overview">
      <div class="tagcloud01">
        <ul>
          <li>Conseil</li>
          <li>Audit</li>
          <li>Restructuration</li>
          <li>Développement</li>
          <li>Transition</li>
          <li>Analyses d'équipes</li>
          <li>Aide à la certification (RABC)</li>
          <li>Coaching d'encadrant</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.tagcloud01 ul {
	margin: 5px;
	padding: 0;
	list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tagcloud01 ul li {
	display: inline-block;
	margin: 0 .3em .3em 0;
	display: inline-block;
	min-width: 50px;
	height: 28px;
	line-height: 28px;
	padding: .3em 1em;
	background-color: var(--background);
	border: 1px solid var(--secondary);
	border-radius: 3px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: var(--primary);
}
</style>
