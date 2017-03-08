@escape(
<div id='feedback-highlighter'>
    <div class='feedback-logo'>{{ trans('remarker.text.title') }}</div>
    <p>{{ trans('remarker.text.highlight_instructions') }}</p>
    <button class='feedback-sethighlight feedback-active'>
        <div class='ico'></div>
            <span>{{ trans('remarker.text.highlight') }}</span>
    </button>
    <label>{{ trans('remarker.text.highlight_instructions_bug') }}</label>
    <button class='feedback-setblackout'>
        <div class='ico'></div>
        <span>{{ trans('remarker.text.clear') }}</span>
    </button>
    <label class='lower'>{{ trans('remarker.text.clear_personal_data') }}</label>
    <div class='feedback-buttons'>
        <button id='feedback-highlighter-next' class='feedback-next-btn feedback-btn-gray'>{{ trans('remarker.text.next') }}</button>
        <button id='feedback-highlighter-back' class='feedback-back-btn feedback-btn-gray'>{{ trans('remarker.text.back') }}</button>
    </div>
    <div class='feedback-wizard-close'></div>
</div>
)
