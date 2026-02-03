<script setup lang="ts">
const { t } = useI18n();

type RoleOption = {
    value: string;
    labelKey: string;
};

type StationeryOption = {
    value: string;
    labelKey: string;
};

const props = withDefaults(
    defineProps<{
        /**
         * Optional: set action/method if you want native form POST
         * (Otherwise handle submit in parent / with your own API)
         */
        action?: string;
        method?: "POST" | "GET";
    }>(),
    {
        action: "",
        method: "POST",
    },
);

const roleOptions: RoleOption[] = [
    { value: "bride-groom", labelKey: "contactForm.roleOptions.brideGroom" },
    {
        value: "event-planner",
        labelKey: "contactForm.roleOptions.eventPlanner",
    },
    { value: "designer", labelKey: "contactForm.roleOptions.designer" },
    { value: "brand", labelKey: "contactForm.roleOptions.brand" },
    { value: "other", labelKey: "contactForm.roleOptions.other" },
];

const stationeryOptions: StationeryOption[] = [
    {
        value: "invitation-suite",
        labelKey: "contactForm.items.invitationSuite",
    },
    { value: "save-the-date", labelKey: "contactForm.items.saveTheDate" },
    { value: "day-of-papers", labelKey: "contactForm.items.dayOfPapers" },
];

const firstName = ref("");
const lastName = ref("");
const role = ref("");
const email = ref("");
const newsletter = ref(false);
const items = ref<string[]>([]);

const submitting = ref(false);
const submitted = ref(false);
const errorMessage = ref<string | null>(null);

const onSubmit = async () => {
    errorMessage.value = null;
    submitted.value = false;
    submitting.value = true;

    try {
        // Basic client-side validation
        if (!firstName.value.trim() || !lastName.value.trim()) {
            throw new Error(t("contactForm.errors.name"));
        }
        if (!email.value.trim()) {
            throw new Error(t("contactForm.errors.email"));
        }

        /**
         * OPTION A: Native POST (action/method) – if you provide `action`, the browser will submit.
         * OPTION B: Handle submit here – send to your API endpoint.
         *
         * For now, we just simulate success so you can wire it up later.
         */
        await new Promise((r) => setTimeout(r, 350));

        submitted.value = true;
    } catch (e: any) {
        errorMessage.value = e?.message || t("contactForm.errors.generic");
    } finally {
        submitting.value = false;
    }
};
</script>

<template>
    <section class="contactForm">
        <div class="contactForm__inner">
            <div class="contactForm__header">
                <p class="contactForm__headline">
                    {{ t("contactForm.headline") }}
                </p>
                <hr class="contactForm__rule" />
            </div>

            <form
                class="form"
                :action="props.action || undefined"
                :method="props.action ? props.method : undefined"
                @submit.prevent="onSubmit"
                novalidate
            >
                <!-- Name -->
                <div class="fieldGroup">
                    <div class="fieldGroup__labelRow">
                        <label class="label">{{
                            t("contactForm.labels.name")
                        }}</label>
                    </div>

                    <div class="grid grid--two">
                        <div class="field">
                            <label class="subLabel" for="firstName">
                                {{ t("contactForm.labels.firstName") }}
                                <span class="required"
                                    >({{ t("contactForm.required") }})</span
                                >
                            </label>
                            <input
                                id="firstName"
                                v-model="firstName"
                                class="input"
                                type="text"
                                :placeholder="
                                    t('contactForm.placeholders.firstName')
                                "
                                autocomplete="given-name"
                                required
                            />
                        </div>

                        <div class="field">
                            <label class="subLabel" for="lastName">
                                {{ t("contactForm.labels.lastName") }}
                                <span class="required"
                                    >({{ t("contactForm.required") }})</span
                                >
                            </label>
                            <input
                                id="lastName"
                                v-model="lastName"
                                class="input"
                                type="text"
                                :placeholder="
                                    t('contactForm.placeholders.lastName')
                                "
                                autocomplete="family-name"
                                required
                            />
                        </div>
                    </div>
                </div>

                <!-- Role -->
                <div class="fieldGroup">
                    <label class="label" for="role">
                        {{ t("contactForm.labels.role") }}
                    </label>

                    <div class="selectWrap">
                        <select
                            id="role"
                            v-model="role"
                            class="select"
                            :aria-label="t('contactForm.labels.role')"
                        >
                            <option value="">
                                {{ t("contactForm.placeholders.select") }}
                            </option>
                            <option
                                v-for="opt in roleOptions"
                                :key="opt.value"
                                :value="opt.value"
                            >
                                {{ t(opt.labelKey) }}
                            </option>
                        </select>

                        <span class="selectWrap__chevron" aria-hidden="true"
                            >⌄</span
                        >
                    </div>
                </div>

                <!-- Stationery items -->
                <div class="fieldGroup">
                    <label class="label">
                        {{ t("contactForm.labels.items") }}
                    </label>
                    <p class="hint">{{ t("contactForm.hints.checkAll") }}</p>

                    <div class="checks">
                        <label
                            v-for="opt in stationeryOptions"
                            :key="opt.value"
                            class="check"
                        >
                            <input
                                v-model="items"
                                class="check__input"
                                type="checkbox"
                                :value="opt.value"
                            />
                            <span class="check__box" aria-hidden="true"></span>
                            <span class="check__text">{{
                                t(opt.labelKey)
                            }}</span>
                        </label>
                    </div>
                </div>

                <!-- Email -->
                <div class="fieldGroup">
                    <label class="label" for="email">
                        {{ t("contactForm.labels.email") }}
                        <span class="required"
                            >({{ t("contactForm.required") }})</span
                        >
                    </label>

                    <input
                        id="email"
                        v-model="email"
                        class="input"
                        type="email"
                        :placeholder="t('contactForm.placeholders.email')"
                        autocomplete="email"
                        required
                    />
                </div>

                <!-- Newsletter -->
                <div class="fieldGroup fieldGroup--compact">
                    <label class="check check--newsletter">
                        <input
                            v-model="newsletter"
                            class="check__input"
                            type="checkbox"
                        />
                        <span class="check__box" aria-hidden="true"></span>
                        <span class="check__text">
                            {{ t("contactForm.labels.newsletter") }}
                        </span>
                    </label>
                </div>

                <!-- Feedback -->
                <p v-if="errorMessage" class="form__error" role="alert">
                    {{ errorMessage }}
                </p>

                <p v-if="submitted" class="form__success" role="status">
                    {{ t("contactForm.success") }}
                </p>

                <!-- Submit -->
                <div class="form__actions">
                    <button class="submit" type="submit" :disabled="submitting">
                        <span v-if="!submitting">{{
                            t("contactForm.submit")
                        }}</span>
                        <span v-else>{{ t("contactForm.submitting") }}</span>
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
/* Section shell */
.contactForm {
    background: #ffffff;
    padding-block: clamp(3.5rem, 7vw, 5.5rem);
}

.contactForm__inner {
    max-width: 62rem;
    margin-inline: auto;
    padding-inline: clamp(1rem, 3vw, 1.5rem);
}

.contactForm__header {
    text-align: center;
    margin-bottom: clamp(1.75rem, 4vw, 2.75rem);
}

.contactForm__headline {
    margin: 0;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: clamp(1.25rem, 2.6vw, 1.75rem);
    line-height: 1.75;
    color: #1f2937;
}

.contactForm__rule {
    margin: clamp(1.25rem, 3vw, 2rem) auto 0;
    width: min(40rem, 92%);
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.28);
}

/* Form */
.form {
    margin-top: clamp(1.25rem, 3vw, 2rem);
}

.fieldGroup {
    margin-bottom: clamp(1.25rem, 3vw, 1.75rem);
}

.fieldGroup--compact {
    margin-top: -0.25rem;
}

.label {
    display: block;
    font-size: 1rem;
    color: #6b7280;
    margin-bottom: 0.4rem;
}

.subLabel {
    display: block;
    font-size: 0.95rem;
    color: #6b7280;
    margin-bottom: 0.35rem;
}

.required {
    font-size: 0.9em;
    color: #9ca3af;
    margin-left: 0.35rem;
}

.hint {
    margin: 0.25rem 0 0.9rem;
    font-size: 0.95rem;
    color: #9ca3af;
}

/* Grid */
.grid {
    display: grid;
    gap: clamp(0.9rem, 2vw, 1.25rem);
}

.grid--two {
    grid-template-columns: 1fr;
}

@media (min-width: 48rem) {
    .grid--two {
        grid-template-columns: 1fr 1fr;
    }
}

/* Inputs */
.input,
.select {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.28);
    background: #fff;
    color: #111827;

    padding: 0.85rem 0.9rem;
    font-size: 1rem;
    line-height: 1.2;

    border-radius: 0;
    outline: none;
}

.input:focus,
.select:focus {
    border-color: rgba(0, 0, 0, 0.55);
}

/* Select */
.selectWrap {
    position: relative;
}

.select {
    appearance: none;
    padding-right: 2.5rem;
}

.selectWrap__chevron {
    position: absolute;
    right: 0.9rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(0, 0, 0, 0.55);
    pointer-events: none;
}

/* Checks */
.checks {
    display: grid;
    gap: 0.75rem;
}

.check {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    user-select: none;
}

.check__input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.check__box {
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid rgba(0, 0, 0, 0.28);
    background: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.check__text {
    font-size: 1rem;
    color: #6b7280;
}

.check__input:checked + .check__box {
    border-color: rgba(0, 0, 0, 0.55);
}

.check__input:checked + .check__box::after {
    content: "";
    width: 0.65rem;
    height: 0.65rem;
    background: #111827;
}

/* Newsletter variant */
.check--newsletter .check__text {
    color: #6b7280;
}

/* Feedback */
.form__error {
    margin: 0.25rem 0 0.75rem;
    color: #b91c1c;
    font-size: 0.95rem;
}

.form__success {
    margin: 0.25rem 0 0.75rem;
    color: #166534;
    font-size: 0.95rem;
}

/* Actions */
.form__actions {
    display: flex;
    justify-content: center;
    margin-top: clamp(1.25rem, 3vw, 1.75rem);
}

.submit {
    background: #000;
    color: #fff;
    border: 1px solid #000;
    padding: 0.9rem 3.25rem;
    font-family: ui-serif, Georgia, "Times New Roman", Times, serif;
    font-style: italic;
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
}

.submit:hover {
    filter: brightness(0.95);
}

.submit:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.submit:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.35);
    outline-offset: 0.35rem;
}
</style>
